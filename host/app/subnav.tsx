import Link from 'next/link';

export default function Page() {
    return (
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/">Root</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/home">Home</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/profile">Profile</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/sample/123456">Sample</Link>
            </li>
        </ul>
    )
}
