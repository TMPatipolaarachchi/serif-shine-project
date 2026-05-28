@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>
    <div class="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-brand opacity-25 blur-3xl pointer-events-none"></div>
    <div class="relative mx-auto max-w-7xl px-4 pt-12 pb-28">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 animate-fade-up">
                <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 text-accent" aria-hidden="true"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"></path></svg>
                    <span class="uppercase tracking-[0.2em] text-muted-foreground">Premium software studio</span>
                </div>
                <h1 class="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight">
                    Software that feels <span class="text-gradient">inevitable.</span>
                </h1>
                <p class="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                    Serendib Software Solutions partners with ambitious teams to design,
                    build, and scale digital products — beautifully engineered, end to end.
                </p>
                <div class="mt-8 flex flex-wrap gap-3">
                    <a href="{{ route('contact') }}" class="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform">
                        Start a project
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="{{ route('portfolio') }}" class="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition">
                        See our work
                    </a>
                </div>
                <div class="mt-12 grid grid-cols-3 gap-6 max-w-md">
                    @foreach([
                        ['v' => '120+', 'l' => 'Projects shipped'],
                        ['v' => '48', 'l' => 'Specialists'],
                        ['v' => '14+', 'l' => 'Countries served'],
                    ] as $stat)
                        <div>
                            <div class="text-3xl font-display font-semibold text-gradient">{{ $stat['v'] }}</div>
                            <div class="text-xs text-muted-foreground mt-1">{{ $stat['l'] }}</div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="lg:col-span-5 relative">
                <div class="relative aspect-square max-w-md mx-auto">
                    <div class="absolute inset-0 rounded-[2rem] bg-gradient-brand opacity-40 blur-3xl animate-glow"></div>
                    <div class="absolute inset-0 rounded-[2rem] glass p-8 flex items-center justify-center overflow-hidden">
                        <div class="absolute inset-0 grid-bg opacity-20"></div>
                        <div class="absolute h-72 w-72 rounded-full border border-white/10 animate-orbit"></div>
                        <div class="absolute h-96 w-96 rounded-full border border-white/5 animate-orbit" style="animation-duration: 40s; animation-direction: reverse;"></div>
                        <img src="{{ asset('images/logo.png') }}" alt="Serendib logo" class="relative h-56 w-56 rounded-3xl animate-float shadow-2xl" />
                    </div>
                    <div class="absolute top-4 -left-4 h-12 w-12 grid place-items-center rounded-2xl glass animate-float"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-accent" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                    <div class="absolute top-1/3 -right-6 h-12 w-12 grid place-items-center rounded-2xl glass animate-float" style="animation-delay: 0.6s;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-accent" aria-hidden="true"><path d="M12 2a3 3 0 0 0-3 3c0 1 .5 2 1.3 2.6"></path><path d="M12 2a3 3 0 0 1 3 3c0 1-.5 2-1.3 2.6"></path><path d="M17.8 14.8A6 6 0 0 0 12 10a6 6 0 0 0-5.8 4.8"></path><path d="M12 10V7"></path><path d="M6 20a6 6 0 0 1 12 0"></path></svg></div>
                    <div class="absolute bottom-8 -left-6 h-12 w-12 grid place-items-center rounded-2xl glass animate-float" style="animation-delay: 1.2s;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-accent" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.7-9"></path><path d="M22 19h-4"></path><path d="M20 17v4"></path></svg></div>
                    <div class="absolute -bottom-4 right-10 h-12 w-12 grid place-items-center rounded-2xl glass animate-float" style="animation-delay: 1.8s;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-accent" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.5 3H7.5"></path><path d="M14 7h-4"></path><path d="M18 11h-8"></path><path d="M8 15H6"></path></svg></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-10 border-y border-border/60 overflow-hidden">
    <div class="flex gap-12 animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground">
        @foreach(array_merge($stack, $stack) as $item)
            <span class="flex items-center gap-3">
                <span class="h-1.5 w-1.5 rounded-full bg-gradient-brand"></span>{{ $item }}
            </span>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-28">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
            <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">Who we are</div>
            <h2 class="text-4xl md:text-5xl font-semibold leading-tight">A studio of senior engineers, designers & product thinkers.</h2>
            <p class="mt-6 text-muted-foreground leading-relaxed">
                We exist to make software feel inevitable — clear, fast, and human. From
                early-stage MVPs to enterprise modernization, our small, senior squads embed
                with your team and ship product that moves the needle.
            </p>
            <div class="mt-8 grid sm:grid-cols-2 gap-3">
                @foreach(['No juniors, no hand-offs', 'Design + engineering as one', 'Async-first communication', 'Outcomes over output'] as $point)
                    <div class="flex items-start gap-2.5 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                        <span>{{ $point }}</span>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            @foreach($why as $index => $item)
                <div class="glass rounded-2xl p-6 hover:bg-white/10 transition" style="margin-top: {{ $index % 2 ? '2rem' : '0' }};">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-accent mb-4" aria-hidden="true">
                        @if($index === 0)
                            <path d="M4.5 16.5c-1.5 1.26-2.5 2.64-2.5 4 0 4.4 7.2 8 16 8s16-3.6 16-8-7.2-8-16-8h-.5"></path>
                            <path d="m12 3 4 4"></path>
                            <path d="M12 3v13"></path>
                            <path d="M8 7h8"></path>
                        @elseif($index === 1)
                            <path d="M20 13c0 5-8 9-8 9s-8-4-8-9a8 8 0 1 1 16 0"></path>
                            <path d="M12 9v4"></path>
                            <path d="M10 11h4"></path>
                        @elseif($index === 2)
                            <path d="M4 14a1 1 0 0 1 0-4h7V6l5 6-5 6v-4z"></path>
                            <path d="M20 10h-4"></path>
                        @else
                            <path d="M16 11c1.66 0 3-1.79 3-4s-1.34-4-3-4-3 1.79-3 4 1.34 4 3 4z"></path>
                            <path d="M8 11c1.66 0 3-1.79 3-4S9.66 3 8 3 5 4.79 5 7s1.34 4 3 4z"></path>
                            <path d="M8 13c-2.67 0-8 1.34-8 4v2h10"></path>
                            <path d="M16 13c2.67 0 8 1.34 8 4v2H14"></path>
                        @endif
                    </svg>
                    <div class="font-medium">{{ $item['title'] }}</div>
                    <div class="text-sm text-muted-foreground mt-1.5">{{ $item['desc'] }}</div>
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">What we do</div>
        <h2 class="text-4xl md:text-5xl font-semibold">Services that scale with you</h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        @foreach($services as $index => $service)
            <div class="group relative glass rounded-2xl p-6 hover:bg-white/10 transition overflow-hidden">
                <div class="absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-20 transition pointer-events-none"></div>
                <div class="relative">
                    <div class="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary-foreground" aria-hidden="true">
                            <circle cx="12" cy="12" r="8"></circle>
                            <path d="M12 8v8"></path>
                            <path d="M8 12h8"></path>
                        </svg>
                    </div>
                    <div class="font-medium text-lg">{{ $service['title'] }}</div>
                    <div class="text-sm text-muted-foreground mt-2 leading-relaxed">{{ $service['desc'] }}</div>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="glass rounded-3xl p-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-brand opacity-10"></div>
        <div class="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            @foreach([
                ['v' => '120+', 'l' => 'Projects delivered'],
                ['v' => '98%', 'l' => 'Client retention'],
                ['v' => '48', 'l' => 'Engineers'],
                ['v' => '14+', 'l' => 'Countries'],
            ] as $stat)
                <div>
                    <div class="text-5xl font-display font-semibold text-gradient">{{ $stat['v'] }}</div>
                    <div class="text-sm text-muted-foreground mt-2">{{ $stat['l'] }}</div>
                </div>
            @endforeach
        </div>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">How we work</div>
        <h2 class="text-4xl md:text-5xl font-semibold">A process that respects momentum</h2>
    </div>
    <div class="grid md:grid-cols-5 gap-4">
        @foreach($process as $step)
            <div class="glass rounded-2xl p-6 hover:bg-white/10 transition">
                <div class="text-3xl font-display text-gradient mb-3">{{ $step['n'] }}</div>
                <div class="font-medium">{{ $step['t'] }}</div>
                <div class="text-sm text-muted-foreground mt-2">{{ $step['d'] }}</div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="flex items-end justify-between mb-10">
        <div>
            <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">Selected work</div>
            <h2 class="text-4xl md:text-5xl font-semibold">Crafted with care</h2>
        </div>
        <a href="{{ route('portfolio') }}" class="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            All projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        @foreach($portfolioTeaser as $index => $project)
            @php
                $gradient = [
                    'from-blue-500 to-teal-400',
                    'from-teal-400 to-green-400',
                    'from-indigo-500 to-blue-400',
                    'from-green-400 to-emerald-500',
                    'from-cyan-400 to-blue-500',
                    'from-blue-600 to-teal-500',
                ][$index % 6];
            @endphp
            <div class="group relative aspect-[4/5] rounded-3xl overflow-hidden glass cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-br {{ $gradient }} opacity-60 group-hover:opacity-90 transition duration-500"></div>
                <div class="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div class="text-xs uppercase tracking-[0.2em] text-white/80">{{ $project['category'] }}</div>
                    <div class="font-display text-2xl text-white mt-1">{{ $project['title'] }}</div>
                    <div class="mt-3 flex items-center gap-2 text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                        View case study
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">Kind words</div>
        <h2 class="text-4xl md:text-5xl font-semibold">Trusted by builders worldwide</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-5">
        @foreach($testimonials as $item)
            <div class="glass rounded-2xl p-7">
                <div class="flex gap-0.5 text-accent">
                    @for($i = 0; $i < 5; $i++)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"></polygon></svg>
                    @endfor
                </div>
                <p class="mt-4 leading-relaxed">"{{ $item['quote'] }}"</p>
                <div class="mt-5 pt-5 border-t border-border/60">
                    <div class="font-medium text-sm">{{ $item['name'] }}</div>
                    <div class="text-xs text-muted-foreground">{{ $item['role'] }}</div>
                </div>
            </div>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-4xl px-4 py-20">
    <div class="text-center mb-12">
        <div class="text-xs uppercase tracking-[0.25em] text-accent mb-4">FAQ</div>
        <h2 class="text-4xl md:text-5xl font-semibold">Questions, answered</h2>
    </div>
    <div class="space-y-3" id="faq-list">
        @foreach($faqs as $idx => $faq)
            <button type="button" class="w-full text-left glass rounded-2xl p-6 hover:bg-white/10 transition faq-trigger" data-target="faq-{{ $idx }}">
                <div class="flex items-center justify-between gap-4">
                    <span class="font-medium">{{ $faq['q'] }}</span>
                    <span class="text-accent transition-transform faq-plus {{ $idx === 0 ? 'rotate-45' : '' }}">＋</span>
                </div>
                <p id="faq-{{ $idx }}" class="mt-3 text-sm text-muted-foreground leading-relaxed {{ $idx === 0 ? 'animate-fade-up' : 'hidden' }}">{{ $faq['a'] }}</p>
            </button>
        @endforeach
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="glass rounded-3xl p-10 md:p-14 relative overflow-hidden">
        <div class="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-brand opacity-30 blur-3xl"></div>
        <div class="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
                <div class="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 text-accent" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    AI Concierge
                </div>
                <h2 class="mt-5 text-3xl md:text-4xl font-semibold">Talk to our AI in seconds.</h2>
                <p class="mt-4 text-muted-foreground">Ask about pricing, timelines, or a tech stack — get an instant answer, anytime.</p>
                <button class="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition">Launch chat</button>
            </div>
            <div class="glass rounded-2xl p-5 space-y-3 font-mono text-xs">
                <div class="flex gap-2"><span class="text-accent">▸</span><span class="text-muted-foreground">How long to build an MVP?</span></div>
                <div class="rounded-xl bg-white/5 p-3">Typically 6–10 weeks for a polished MVP. Want a tailored estimate?</div>
                <div class="flex gap-2"><span class="text-accent">▸</span><span class="text-muted-foreground">Do you do AI integrations?</span></div>
                <div class="rounded-xl bg-white/5 p-3">Yes — RAG, agents, fine-tuning, and on-prem deployments.</div>
            </div>
        </div>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-20">
    <div class="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center glass">
        <div class="absolute inset-0 bg-gradient-brand opacity-20"></div>
        <div class="absolute inset-0 grid-bg opacity-20"></div>
        <div class="relative">
            <h2 class="text-4xl md:text-6xl font-semibold leading-tight">Let's build something <span class="text-gradient">remarkable.</span></h2>
            <p class="mt-5 text-muted-foreground max-w-xl mx-auto">Join 2,000+ founders & operators getting our monthly notes on shipping great software.</p>
            <form class="mt-8 max-w-md mx-auto flex gap-2" onsubmit="event.preventDefault()">
                <input type="email" placeholder="you@company.com" class="flex-1 rounded-full bg-white/5 border border-border px-5 py-3 text-sm outline-none focus:border-accent" />
                <button class="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground glow-ring" type="submit">Subscribe</button>
            </form>
            <div class="mt-8 flex flex-wrap gap-3 justify-center">
                <a href="{{ route('contact') }}" class="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.03] transition">
                    Start a project
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="#" class="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3 0 6.8-2 6.8-9A7 7 0 0 0 20 3.8a6.5 6.5 0 0 0-.1-1.8s-1.1-.4-3.6 1.4a12.3 12.3 0 0 0-6.3 0C7.5 1.6 6.4 2 6.4 2A6.5 6.5 0 0 0 6.3 3.8 7 7 0 0 0 5.5 5.7c0 7 3.5 9 6.8 9A4.8 4.8 0 0 0 11 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg>
                    Open source
                </a>
            </div>
        </div>
    </div>
</section>
@endsection

@push('scripts')
<script>
    document.querySelectorAll('.faq-trigger').forEach((btn) => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const allAnswers = document.querySelectorAll('#faq-list p[id^="faq-"]');
            const allPlus = document.querySelectorAll('#faq-list .faq-plus');

            allAnswers.forEach((answer) => {
                if (answer.id === targetId) {
                    answer.classList.toggle('hidden');
                    answer.classList.toggle('animate-fade-up');
                } else {
                    answer.classList.add('hidden');
                    answer.classList.remove('animate-fade-up');
                }
            });

            allPlus.forEach((plus) => plus.classList.remove('rotate-45'));
            const currentPlus = btn.querySelector('.faq-plus');
            const currentAnswer = document.getElementById(targetId);
            if (currentPlus && currentAnswer && !currentAnswer.classList.contains('hidden')) {
                currentPlus.classList.add('rotate-45');
            }
        });
    });
</script>
@endpush
