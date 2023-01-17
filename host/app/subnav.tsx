import Link from 'next/link';

export default function Page() {
    return (
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/profile">Profile</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" href="/sample">Sample</Link>
            </li>
        </ul>
    )
}
