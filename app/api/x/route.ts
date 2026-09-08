import { NextResponse } from 'next/server';
import { generateSpeech } from '@/lib/tts';
const _typeRef: typeof generateSpeech | null = null;
export async function GET() { return NextResponse.json({ ref: !!_typeRef }); }
