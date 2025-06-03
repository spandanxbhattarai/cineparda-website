import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { reset, newPassword, confirmPassword } = await request.json();
    
    if (!reset || !newPassword) {
      return NextResponse.json(
        { message: 'Reset token and new password are required' },
        { status: 400 }
      );
    }
    
   const apiUrl = `${process.env.DEV_ADMIN_DOMAIN}/api/auth/reset-password`;
    
    const response = await fetch(apiUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: reset,
        password: newPassword,
        passwordConfirmation: confirmPassword
      })
    });
    
    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    let responseData;
    
    if (contentType?.includes('application/json')) {
      responseData = await response.json();
    } else {
      const text = await response.text();
      return NextResponse.json(
        { message: text || 'Password reset failed' },
        { status: response.status }
      );
    }
    
    if (!response.ok) {
      return NextResponse.json(
        { 
          message: responseData.message || 
                  responseData.error || 
                  'Password reset failed',
          details: responseData.details
        },
        { status: response.status }
      );
    }
    
    return NextResponse.json(
      { 
        message: 'Password reset successfully',
        data: responseData
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json(
      { message: 'Internal server error during password reset' },
      { status: 500 }
    );
  }
}