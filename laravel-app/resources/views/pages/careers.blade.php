@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Careers</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Do the best work of your life.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Senior team, real ownership, and impactful projects.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-12">
    <h2 class="text-3xl font-semibold mb-8">Open roles</h2>
    <div class="space-y-3">
        @foreach($jobs as $job)
            <div class="group glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/10 transition">
                <div>
                    <div class="font-display text-xl font-semibold">{{ $job['title'] }}</div>
                    <div class="text-sm text-muted-foreground mt-1">{{ $job['details'] }}</div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5" aria-hidden="true">
                            <path d="M20 10c0 4.993-5.539 9.193-7.399 10.53a1 1 0 0 1-1.202 0C9.539 19.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {{ str_replace(' - ', ' · ', $job['location']) }}
                    </div>
                    <a href="#apply" class="rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground">Apply</a>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-16">
    <div class="text-center mb-12">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-3">Benefits</div>
        <h2 class="text-4xl font-semibold">Built for great work</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        @foreach($perks as $index => $perk)
            <div class="glass rounded-2xl p-6 hover:bg-white/10 transition">
                @if($index === 0)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="M17.8 19.2 16 11l8-7-11 1L9 0 6 5 0 6l7 5-2 8 7-4z"></path></svg>
                @elseif($index === 1)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                @elseif($index === 2)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                @elseif($index === 3)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M5 8h14"></path><path d="M4 8h16v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"></path><path d="M8 14h8"></path></svg>
                @elseif($index === 4)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                @else
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                @endif
                <div class="font-medium">{{ $perk['title'] }}</div>
                <div class="text-sm text-muted-foreground mt-2">{{ $perk['desc'] }}</div>
            </div>
        @endforeach
    </div>
</section>

<section id="apply" class="mx-auto max-w-2xl px-4 py-16">
    <div class="glass rounded-3xl p-8 md:p-10">
        <h2 class="text-3xl font-semibold">Apply now</h2>
        <p class="text-muted-foreground mt-2">Tell us about you — we read every application.</p>
        <form class="mt-6 space-y-4" onsubmit="event.preventDefault(); alert('Thanks! We will review your application.');">
            <input placeholder="Full name" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <input placeholder="Email" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <input placeholder="Role you're applying for" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <input placeholder="Portfolio / GitHub URL" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent" />
            <textarea placeholder="Tell us about yourself" rows="5" class="w-full rounded-xl bg-white/5 border border-border px-4 py-3 text-sm outline-none focus:border-accent"></textarea>
            <button class="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring">Submit application</button>
        </form>
    </div>
</section>
@endsection
