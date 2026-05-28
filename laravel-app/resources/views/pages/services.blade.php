@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Services</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Everything you need, under one roof.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">One senior team. End-to-end ownership from idea to scale.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-12">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        @foreach($items as $index => $item)
            <div class="group relative glass rounded-3xl p-7 hover:bg-white/10 transition overflow-hidden">
                <div class="absolute -inset-px rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition pointer-events-none"></div>
                <div class="relative">
                    <div class="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary-foreground" aria-hidden="true">
                            @if($index === 0)
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            @elseif($index === 1)
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" x2="22" y1="12" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            @elseif($index === 2)
                                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                <path d="M12 18h.01"></path>
                            @elseif($index === 3)
                                <path d="M12 2a3 3 0 0 0-3 3c0 1 .5 2 1.3 2.6"></path>
                                <path d="M12 2a3 3 0 0 1 3 3c0 1-.5 2-1.3 2.6"></path>
                                <path d="M17.8 14.8A6 6 0 0 0 12 10a6 6 0 0 0-5.8 4.8"></path>
                                <path d="M12 10V7"></path>
                                <path d="M6 20a6 6 0 0 1 12 0"></path>
                            @elseif($index === 4)
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9"></path>
                                <path d="M22 19h-4"></path>
                                <path d="M20 17v4"></path>
                            @elseif($index === 5)
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            @elseif($index === 6)
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path>
                                <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path>
                            @elseif($index === 7)
                                <path d="M12 3a9 9 0 0 0-9 9c0 5 9 9 9 9s9-4 9-9a9 9 0 0 0-9-9z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            @elseif($index === 8)
                                <path d="M12 22V8"></path>
                                <path d="m5 12 7-7 7 7"></path>
                            @elseif($index === 9)
                                <path d="M6 2v20"></path>
                                <path d="M18 2v20"></path>
                                <path d="M2 6h20"></path>
                                <path d="M2 18h20"></path>
                            @elseif($index === 10)
                                <path d="M14.7 6.3a2.41 2.41 0 0 0-3.4 0L2 15.6V22h6.4l9.3-9.3a2.41 2.41 0 0 0 0-3.4z"></path>
                                <path d="m12 8 4 4"></path>
                            @else
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            @endif
                        </svg>
                    </div>
                    <div class="font-display text-xl font-semibold">{{ $item['title'] }}</div>
                    <p class="text-sm text-muted-foreground mt-3 leading-relaxed">{{ $item['desc'] }}</p>
                    <div class="mt-5 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="glass rounded-3xl p-12 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-brand opacity-15"></div>
        <div class="relative">
            <h2 class="text-3xl md:text-4xl font-semibold">Not sure where to start?</h2>
            <p class="mt-3 text-muted-foreground">Tell us about your project. We'll send a tailored proposal in 48 hours.</p>
            <a href="{{ route('contact') }}" class="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition">
                Get a proposal
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                    <line x1="5" x2="19" y1="12" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>
</section>
@endsection
