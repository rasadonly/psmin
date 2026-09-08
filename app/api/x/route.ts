import { NextResponse } from 'next/server';
import { greet } from '@/lib/thing';
import { dirGreet } from '@/lib/dir';
export async function GET() { return NextResponse.json({ a: greet(), b: dirGreet() }); }
