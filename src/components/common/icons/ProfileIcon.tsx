import styled from 'styled-components'

export default function ProfileIcon() {
    return (
        <>
            <ProfileImg>
                <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.5 0.75C6.39553 0.75 4.68952 2.53295 4.68952 4.73233C4.68952 6.93171 6.39553 8.71466 8.5 8.71466C10.6045 8.71466 12.3105 6.93171 12.3105 4.73233C12.3105 2.53295 10.6045 0.75 8.5 0.75Z"
                        fill="#262626"
                        fillOpacity="0.8"
                    />
                    <path
                        d="M4.43548 10.8386C2.33101 10.8386 0.625 12.6215 0.625 14.8209V16.0828C0.625 16.8827 1.17969 17.5647 1.93507 17.6936C6.28291 18.4355 10.7171 18.4355 15.0649 17.6936C15.8203 17.5647 16.375 16.8827 16.375 16.0828V14.8209C16.375 12.6215 14.669 10.8386 12.5645 10.8386H12.2181C12.0307 10.8386 11.8444 10.8695 11.6662 10.9304L10.7867 11.2305C9.30084 11.7375 7.69916 11.7375 6.21329 11.2305L5.33382 10.9304C5.15561 10.8695 4.96932 10.8386 4.78185 10.8386H4.43548Z"
                        fill="#262626"
                        fillOpacity="0.8"
                    />
                </svg>
            </ProfileImg>
        </>
    )
}

const ProfileImg = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    background: gray;
    text-align: center;
    padding: 8px 0;
`
