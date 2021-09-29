import { useMail } from '../hooks/useMail';

const Mail = () => {
    const { setName, setEmail, setMessage, send, pending } = useMail();

    return (
        <>
            <div>
                <dl>
                    <dt>お名前</dt>
                    <dd><input type="text" onChange={(e) => setName(e.target.value)} /></dd>
                </dl>
                <dl>
                    <dt>メールアドレス</dt>
                    <dd><input type="email" onChange={(e) => setEmail(e.target.value)} /></dd>
                </dl>
                <dl>
                    <dt>問い合わせ</dt>
                    <dd><textarea onChange={(e) => setMessage(e.target.value)} /></dd>
                </dl>
                <button type="button" onClick={send}>Send</button>
                { pending && 'メール送信中...' }
            </div>
        </>
    );
}

export default　Mail;