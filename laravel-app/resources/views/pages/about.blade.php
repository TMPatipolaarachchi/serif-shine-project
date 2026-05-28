@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">About us</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Building the future, one product at a time.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">We're a senior software studio with a bias for craft, clarity, and shipping.</p>
    </div>
</section>

<section class="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-8">
    <div class="glass rounded-3xl p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
        </svg>
        <h3 class="text-2xl font-semibold mb-3">Our Mission</h3>
        <p class="text-muted-foreground leading-relaxed">To make world-class software accessible to ambitious teams everywhere — fast, beautiful, and built to last.</p>
    </div>
    <div class="glass rounded-3xl p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <h3 class="text-2xl font-semibold mb-3">Our Vision</h3>
        <p class="text-muted-foreground leading-relaxed">A world where every team can ship software that feels inevitable — clear, fast, and human.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-16">
    <div class="text-center mb-12">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-3">Our values</div>
        <h2 class="text-4xl font-semibold">What we believe</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        @foreach($values as $index => $value)
            <div class="glass rounded-2xl p-6 hover:bg-white/10 transition">
                @if($index === 0)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                @elseif($index === 1)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                @elseif($index === 2)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                @else
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
                        <circle cx="12" cy="8" r="6"></circle>
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </svg>
                @endif
                <div class="font-medium text-lg">{{ $value['title'] }}</div>
                <div class="text-sm text-muted-foreground mt-2">{{ $value['desc'] }}</div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-16">
    <div class="text-center mb-12">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-3">The team</div>
        <h2 class="text-4xl font-semibold">People you'll meet</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        @foreach($team as $member)
            <div class="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition">
                <div class="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center font-display text-xl text-primary-foreground">{{ collect(explode(' ', $member['name']))->map(fn ($part) => strtoupper(substr($part, 0, 1)))->implode('') }}</div>
                <div>
                    <div class="font-medium">{{ $member['name'] }}</div>
                    <div class="text-sm text-muted-foreground">{{ $member['role'] }}</div>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-3xl px-4 py-16">
    <div class="text-center mb-12">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-3">Milestones</div>
        <h2 class="text-4xl font-semibold">Our journey</h2>
    </div>
    <div class="relative pl-8 border-l border-border/60 space-y-8">
        @foreach($timeline as $step)
            <div class="relative">
                <div class="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-gradient-brand glow-ring"></div>
                <div class="text-2xl font-display text-gradient">{{ $step['year'] }}</div>
                <div class="text-muted-foreground mt-1">{{ $step['text'] }}</div>
            </div>
        @endforeach
    </div>
</section>
@endsection
