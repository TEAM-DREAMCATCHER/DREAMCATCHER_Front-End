import styled from 'styled-components'

export default function LikeIcon() {
    const mock = true

    // true 값 넘기면 빨간하트 , false 넘기면 회색하트

    return (
        <>
            {mock ? (
                <LikeBox>
                    <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.01613 0.833008C3.80978 0.833008 4.51525 1.18476 5.00025 1.75635C5.48526 1.18476 6.23482 0.833008 7.02847 0.833008C8.43941 0.833008 9.62988 2.02016 9.62988 3.42715C9.62988 3.51509 9.62988 3.60303 9.62988 3.69096C9.45352 5.84542 7.16075 7.64813 5.7939 8.48353C5.57345 8.61544 5.3089 8.70338 5.00025 8.70338C4.7357 8.70338 4.47115 8.61544 4.2066 8.48353C2.83976 7.60416 0.546992 5.84542 0.370625 3.69096C0.370625 3.60303 0.370625 3.51509 0.370625 3.42715C0.370625 2.02016 1.5611 0.833008 3.01613 0.833008Z"
                            fill="url(#paint0_angular_120_557)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_angular_120_557"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(5.00025 4.76819) rotate(90) scale(3.93518 4.62963)"
                            >
                                <stop offset="0.510417" stop-color="#EA386E" />
                            </radialGradient>
                        </defs>
                    </svg>
                </LikeBox>
            ) : (
                <LikeBox>
                    <svg
                        width="10"
                        height="9"
                        viewBox="0 0 10 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.01613 0.833008C3.80978 0.833008 4.51525 1.18476 5.00025 1.75635C5.48526 1.18476 6.23482 0.833008 7.02847 0.833008C8.43941 0.833008 9.62988 2.02016 9.62988 3.42715C9.62988 3.51509 9.62988 3.60303 9.62988 3.69096C9.45352 5.84542 7.16075 7.64813 5.7939 8.48353C5.57345 8.61544 5.3089 8.70338 5.00025 8.70338C4.7357 8.70338 4.47115 8.61544 4.2066 8.48353C2.83976 7.60416 0.546992 5.84542 0.370625 3.69096C0.370625 3.60303 0.370625 3.51509 0.370625 3.42715C0.370625 2.02016 1.5611 0.833008 3.01613 0.833008Z"
                            fill="url(#paint0_angular_120_557)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_angular_120_557"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(5.00025 4.76819) rotate(90) scale(3.93518 4.62963)"
                            >
                                <stop offset="0.510417" stop-color="#d3c9c9" />
                            </radialGradient>
                        </defs>
                    </svg>
                </LikeBox>
            )}
        </>
    )
}

const LikeBox = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(38, 38, 38, 0.8);
    text-align: center;
    line-height: 11px;
`
