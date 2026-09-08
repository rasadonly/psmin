import { generateSpeech } from '../lib/tts';
const _typeRef: typeof generateSpeech | null = null;
export default function Home() { return <div>{_typeRef ? "ok" : "no"}</div>; }
