<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'fullName' => ['required', 'string', 'max:120'],
            'workEmail' => ['nullable', 'email', 'max:120'],
            'phoneNumber' => ['required', 'string', 'max:40'],
            'projectDetails' => ['required', 'string', 'max:5000'],
        ]);

        $destinationEmail = env('CONTACT_TO_EMAIL', 'srendibsoftwaresolutions@gmail.com');
        $subject = 'New project inquiry from ' . $validated['fullName'];

        $lines = [
            'Name: ' . $validated['fullName'],
            'Email: ' . ($validated['workEmail'] ?? 'N/A'),
            'Phone: ' . $validated['phoneNumber'],
            '',
            'Message:',
            $validated['projectDetails'],
        ];

        Mail::raw(implode("\n", $lines), function ($message) use ($destinationEmail, $subject, $validated): void {
            $message->to($destinationEmail)->subject($subject);

            if (!empty($validated['workEmail'])) {
                $message->replyTo($validated['workEmail']);
            }
        });

        return back()->with('status', 'Message sent successfully. We will get back to you soon.');
    }
}
