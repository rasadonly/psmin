import { greet } from '../lib/thing';
import { dirGreet } from '../lib/dir';
export default function Home() { return <div>{greet()}:{dirGreet()}</div>; }
