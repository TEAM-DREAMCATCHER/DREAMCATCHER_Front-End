import { ContentBox, FooterBox, HeaderBox, IdBox, PostingItem, ProfileBox } from './style'

export default function Posting() {
    return (
        <>
            <PostingItem>
                <HeaderBox>
                    <ProfileBox>
                        <div>
                            <p>사진</p>
                        </div>
                        <div>
                            <IdBox>
                                <p>닉네임</p>
                            </IdBox>
                            <div>
                                <p>6시간전</p>
                            </div>
                        </div>
                    </ProfileBox>
                    <div>📖</div>
                </HeaderBox>
                <ContentBox>
                    <p>꿈내용 블라블라~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
                </ContentBox>
                <FooterBox>
                    <div>
                        <p>❤️5</p>
                    </div>
                    <div>
                        <p>6시간전</p>
                    </div>
                </FooterBox>
            </PostingItem>
        </>
    )
}
