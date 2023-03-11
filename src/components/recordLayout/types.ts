import { Dispatch, FormEvent, ReactNode, SetStateAction } from 'react'

export interface RecordState {
    emoji: string
    content: string
    isPublic: boolean
    date: Date
}

export interface RecordLayoutProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
    recordState: RecordState
    setRecordState: Dispatch<SetStateAction<RecordState>>
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

export interface FormProps {
    handleSubmit: (event: SubmitEvent) => void
    children: ReactNode
}

export interface RecordFooterProps {
    recordState: RecordState
    setRecordState: Dispatch<SetStateAction<RecordState>>
}
