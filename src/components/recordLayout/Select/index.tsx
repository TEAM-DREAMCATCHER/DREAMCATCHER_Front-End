import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import {
    SelectOption,
    MultipleSelectProps,
    SingleSelectProps,
    SelectProps,
    OptionsProps,
} from './types'
import {
    Container,
    Value,
    OptionBadge,
    RemoveBtn,
    ClearBtn,
    Divider,
    Caret,
    Options,
    Option,
} from './style'

export function Select({ multiple, value, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    function clearOptions() {
        multiple ? onChange([]) : onChange(undefined)
    }

    function selectOption(option: SelectOption) {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter((o) => o !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            if (option !== value) onChange(option)
        }
    }

    function isOptionSelected(option: SelectOption) {
        return multiple ? value.includes(option) : option === value
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return
            switch (e.code) {
                case 'Enter':
                case 'Space':
                    setIsOpen((prev) => !prev)
                    if (isOpen) selectOption(options[highlightedIndex])
                    break
                case 'ArrowUp':
                case 'ArrowDown': {
                    if (!isOpen) {
                        setIsOpen(true)
                        break
                    }

                    const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1)
                    if (newValue >= 0 && newValue < options.length) {
                        setHighlightedIndex(newValue)
                    }
                    break
                }
                case 'Escape':
                    setIsOpen(false)
                    break
            }
        }
        containerRef.current?.addEventListener('keydown', handler)

        return () => {
            containerRef.current?.removeEventListener('keydown', handler)
        }
    }, [isOpen, highlightedIndex, options])

    return (
        <Container
            ref={containerRef}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen((prev) => !prev)}
            tabIndex={0}
        >
            <Value>
                {multiple
                    ? value.map((v) => (
                          <OptionBadge
                              key={v.value}
                              onClick={(e) => {
                                  e.stopPropagation()
                                  selectOption(v)
                              }}
                          >
                              {v.label}
                              <RemoveBtn>&times;</RemoveBtn>
                          </OptionBadge>
                      ))
                    : value?.label}
            </Value>
            <ClearBtn
                onClick={(e) => {
                    e.stopPropagation()
                    clearOptions()
                }}
            >
                &times;
            </ClearBtn>
            <Divider></Divider>
            <Caret></Caret>
            <Options isOpen={isOpen}>
                {options.map((option, index) => (
                    <Option
                        isOptionSelectedValue={isOptionSelected(option)}
                        isHighLighted={index === highlightedIndex}
                        onClick={(e) => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                    >
                        {option.label}
                    </Option>
                ))}
            </Options>
        </Container>
    )
}
