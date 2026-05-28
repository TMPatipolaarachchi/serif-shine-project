@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Contact</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Let's talk.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Tell us about your project and we'll get back within one business day.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-5 gap-8">
    <div class="lg:col-span-3 glass rounded-3xl p-8 md:p-10">
        <h2 class="text-2xl font-semibold mb-6">Start a project</h2>

        @if(session('status'))
            <p class="mb-4 text-sm text-emerald-300">{{ session('status') }}</p>
        @endif

        @if($errors->any())
            <div class="mb-4 text-sm text-red-300">
                @foreach($errors->all() as $error)
                    <p>{{ $error }}</p>
                @endforeach
            </div>
        @endif

        <form class="space-y-4" method="POST" action="{{ route('contact.send') }}">
            @csrf
            <input name="fullName" value="{{ old('fullName') }}" placeholder="Full name" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <input name="phoneNumber" value="{{ old('phoneNumber') }}" placeholder="Phone number" type="tel" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <textarea name="projectDetails" placeholder="Tell us about your project…" rows="6" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent">{{ old('projectDetails') }}</textarea>
            <button type="submit" class="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.01] transition disabled:opacity-60 disabled:hover:scale-100">Send message</button>
        </form>
    </div>

    <div class="lg:col-span-2 space-y-4">
        <div class="glass rounded-3xl p-7 space-y-4">
            <div class="flex items-start gap-3">
                <div class="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-primary-foreground" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-10 5L2 7"></path>
                    </svg>
                </div>
                <div>
                    <div class="text-xs text-muted-foreground">Email</div>
                    <a href="mailto:srendibsoftwaresolutions@gmail.com" class="hover:text-accent">srendibsoftwaresolutions@gmail.com</a>
                </div>
            </div>
            <div class="flex items-start gap-3">
                <div class="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-primary-foreground" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.62 2.35a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.73-1.28a2 2 0 0 1 2.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </div>
                <div>
                    <div class="text-xs text-muted-foreground">Phone</div>
                    <div>+94 74 018 7747</div>
                </div>
            </div>
            <div class="flex items-start gap-3">
                <div class="h-10 w-10 grid place-items-center rounded-xl bg-gradient-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-primary-foreground" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 9.193-7.399 10.53a1 1 0 0 1-1.202 0C9.539 19.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <div>
                    <div class="text-xs text-muted-foreground">Office</div>
                    <div>Alawwa, Sri Lanka</div>
                </div>
            </div>
            <div class="flex items-start gap-3">
                <div class="h-10 w-10 grid place-items-center rounded-xl bg-[#25D366]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-white" aria-hidden="true">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        <path d="M8 12h.01"></path>
                        <path d="M12 12h.01"></path>
                        <path d="M16 12h.01"></path>
                    </svg>
                </div>
                <div>
                    <div class="text-xs text-muted-foreground">WhatsApp</div>
                    <a href="https://wa.me/94740187747" class="hover:text-accent">Chat with us instantly →</a>
                </div>
            </div>
        </div>

        <div class="glass rounded-3xl p-7">
            <div class="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Follow us</div>
            <div class="flex gap-2">
                <a href="#" class="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3 0 6.8-2 6.8-9A7 7 0 0 0 20 3.8a6.5 6.5 0 0 0-.1-1.8s-1.1-.4-3.6 1.4a12.3 12.3 0 0 0-6.3 0C7.5 1.6 6.4 2 6.4 2A6.5 6.5 0 0 0 6.3 3.8 7 7 0 0 0 5.5 5.7c0 7 3.5 9 6.8 9A4.8 4.8 0 0 0 11 18v4"></path>
                        <path d="M9 18c-4.5 2-5-2-7-2"></path>
                    </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577909078210" target="_blank" rel="noopener noreferrer" class="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
                <a href="#" class="h-10 w-10 grid place-items-center rounded-xl glass hover:bg-white/10 transition" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </div>
        </div>

        <div class="glass rounded-3xl overflow-hidden aspect-video">
            <iframe
                title="Office location"
                class="w-full h-full grayscale-[40%] opacity-90"
                src="https://www.google.com/maps?q=Alawwa,Sri+Lanka&output=embed"
                loading="lazy"></iframe>
        </div>
    </div>
</section>
@endsection
