import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { confirmation } = await request.json();
    
    if (!confirmation) {
      return NextResponse.json(
        { message: 'Confirmation token is required' },
        { status: 400 }
      );
    }
    
    const apiUrl = `https://sandbox-admin.cineparda.com/api/auth/email-confirmation?confirmation=${confirmation}`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      // Try to get error message from response
      let errorData;
      try {

        errorData = await response.json();
      } catch (e) {
        errorData = { message: 'Email confirmation failed' };
      }
      
      return NextResponse.json(
        { message: errorData.message || 'Email confirmation failed' },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    
    return NextResponse.json(
      { 
        message: 'Email confirmed successfully',
        data // optionally forward the response data
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Email confirmation error:', error);
    return NextResponse.json(
      { message: 'Internal server error during confirmation' },
      { status: 500 }
    );
  }
}