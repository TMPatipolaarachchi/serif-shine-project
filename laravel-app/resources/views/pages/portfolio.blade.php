@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Portfolio</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Work we're proud of.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">A slice of recent projects across industries and continents.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4">
    <div class="flex flex-wrap gap-2 justify-center mb-10" id="portfolio-filters">
        @foreach(['All', 'AI', 'Fintech', 'EdTech', 'E-commerce', 'Healthcare', 'Enterprise'] as $cat)
            <button type="button" data-cat="{{ $cat }}" class="rounded-full px-4 py-2 text-sm transition {{ $cat === 'All' ? 'bg-gradient-brand text-primary-foreground' : 'glass hover:bg-white/10' }}">{{ $cat }}</button>
        @endforeach
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20" id="portfolio-grid">
        @foreach($projects as $index => $project)
            @php
                $gradient = [
                    'from-blue-500 to-teal-400',
                    'from-teal-400 to-green-400',
                    'from-indigo-500 to-blue-400',
                    'from-green-400 to-emerald-500',
                    'from-cyan-400 to-blue-500',
                    'from-blue-600 to-teal-500',
                    'from-purple-500 to-blue-500',
                    'from-emerald-400 to-teal-500',
                ][$index % 8];
            @endphp
            <button type="button" data-project='@json($project)' data-cat="{{ $project['category'] }}" data-grad="{{ $gradient }}" class="portfolio-item group text-left relative aspect-[4/5] rounded-3xl overflow-hidden glass">
                <div class="absolute inset-0 bg-gradient-to-br {{ $gradient }} opacity-60 group-hover:opacity-90 transition duration-500"></div>
                <div class="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
                <div class="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                    </svg>
                </div>
                <div class="absolute inset-0 flex flex-col justify-end p-6">
                    <div class="text-xs uppercase tracking-[0.2em] text-white/80">{{ $project['category'] }}</div>
                    <div class="font-display text-2xl text-white mt-1">{{ $project['title'] }}</div>
                </div>
            </button>
        @endforeach
    </div>
</section>

<div id="project-modal" class="hidden fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-md p-4 animate-fade-up">
    <div class="max-w-2xl w-full glass rounded-3xl overflow-hidden">
        <div id="modal-gradient" class="aspect-[16/9] bg-gradient-to-br from-blue-500 to-teal-400 relative">
            <div class="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
            <button type="button" id="modal-x-close" class="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass" aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
        </div>
        <div class="p-8">
            <div class="text-xs uppercase tracking-[0.2em] text-accent" id="modal-category"></div>
            <h3 class="font-display text-3xl mt-2" id="modal-title"></h3>
            <p class="text-muted-foreground mt-4 leading-relaxed" id="modal-desc"></p>
            <button type="button" id="modal-close" class="mt-6 rounded-full glass px-5 py-2 text-sm">Close</button>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    const filterButtons = document.querySelectorAll('#portfolio-filters button');
    const items = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const closeXBtn = document.getElementById('modal-x-close');
    const modalGradient = document.getElementById('modal-gradient');

    const gradients = [
        'from-blue-500 to-teal-400',
        'from-teal-400 to-green-400',
        'from-indigo-500 to-blue-400',
        'from-green-400 to-emerald-500',
        'from-cyan-400 to-blue-500',
        'from-blue-600 to-teal-500',
        'from-purple-500 to-blue-500',
        'from-emerald-400 to-teal-500'
    ];

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            filterButtons.forEach((b) => b.classList.remove('bg-gradient-brand', 'text-primary-foreground'));
            btn.classList.add('bg-gradient-brand', 'text-primary-foreground');

            items.forEach((item) => {
                item.style.display = cat === 'All' || item.dataset.cat === cat ? '' : 'none';
            });
        });
    });

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const project = JSON.parse(item.dataset.project);
            document.getElementById('modal-category').textContent = project.category;
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-desc').textContent = project.desc;
            if (modalGradient) {
                gradients.forEach((gradient) => {
                    gradient.split(' ').forEach((part) => modalGradient.classList.remove(part));
                });
                const selectedGradient = (item.dataset.grad || gradients[0]).split(' ');
                selectedGradient.forEach((part) => modalGradient.classList.add(part));
            }
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    closeXBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
</script>
@endpush
