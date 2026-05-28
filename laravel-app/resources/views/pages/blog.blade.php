@extends('layouts.app')

@section('content')
<section class="relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
    <div class="relative mx-auto max-w-5xl px-4 py-20 text-center animate-fade-up">
        <div class="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Blog</div>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]"><span class="text-gradient">Notes from the studio.</span></h1>
        <p class="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Engineering, design, AI, and the craft of shipping software.</p>
    </div>
</section>

<section class="mx-auto max-w-7xl px-4">
    @php
        $featured = $posts[0] ?? null;
    @endphp

    <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        <div class="flex flex-wrap gap-2" id="blog-filters">
            @foreach(['All', 'Design', 'AI', 'Engineering', 'Process'] as $cat)
                <button type="button" data-cat="{{ $cat }}" class="rounded-full px-4 py-2 text-sm transition {{ $cat === 'All' ? 'bg-gradient-brand text-primary-foreground' : 'glass hover:bg-white/10' }}">{{ $cat }}</button>
            @endforeach
        </div>
        <div class="relative w-full md:w-72">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input id="blog-search" placeholder="Search articles…" class="w-full rounded-full bg-white/5 border border-border pl-11 pr-4 py-2.5 text-sm outline-none focus:border-accent" />
        </div>
    </div>

    @if($featured)
        <article class="group glass rounded-3xl overflow-hidden mb-8 grid md:grid-cols-2 cursor-pointer">
            <div class="aspect-video md:aspect-auto bg-gradient-to-br from-blue-500 to-teal-400 relative">
                <div class="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
            </div>
            <div class="p-8 md:p-10 flex flex-col justify-center">
                <div class="text-xs uppercase tracking-[0.2em] text-accent">{{ $featured['category'] }} · Featured</div>
                <h3 class="font-display text-3xl md:text-4xl font-semibold mt-3">{{ $featured['title'] }}</h3>
                <p class="text-muted-foreground mt-4 leading-relaxed">{{ $featured['excerpt'] }}</p>
                <div class="mt-6 flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-muted-foreground" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                    </svg>
                    <span class="text-muted-foreground">{{ $featured['date'] }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 ml-auto text-accent group-hover:translate-x-1 transition" aria-hidden="true">
                        <line x1="5" x2="19" y1="12" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </article>
    @endif

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20" id="blog-grid">
        @foreach(array_slice($posts, 1) as $post)
            <article class="blog-item group glass rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer" data-cat="{{ $post['category'] }}" data-title="{{ strtolower($post['title']) }}">
                <div class="aspect-[16/10] bg-gradient-to-br from-teal-400 to-green-400 relative">
                    <div class="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
                </div>
                <div class="p-6">
                    <div class="text-xs uppercase tracking-[0.2em] text-accent">{{ $post['category'] }}</div>
                    <h3 class="font-display text-xl font-semibold mt-2">{{ $post['title'] }}</h3>
                    <p class="text-sm text-muted-foreground mt-2 leading-relaxed">{{ $post['excerpt'] }}</p>
                    <div class="text-xs text-muted-foreground mt-4">{{ $post['date'] }}</div>
                </div>
            </article>
        @endforeach
    </div>
</section>
@endsection

@push('scripts')
<script>
    const blogFilters = document.querySelectorAll('#blog-filters button');
    const blogItems = document.querySelectorAll('.blog-item');
    const blogSearch = document.getElementById('blog-search');

    let activeCat = 'All';

    function renderBlog() {
        const query = blogSearch.value.toLowerCase().trim();
        blogItems.forEach((item) => {
            const categoryMatch = activeCat === 'All' || item.dataset.cat === activeCat;
            const textMatch = item.dataset.title.includes(query);
            item.style.display = categoryMatch && textMatch ? '' : 'none';
        });
    }

    blogFilters.forEach((btn) => {
        btn.addEventListener('click', () => {
            activeCat = btn.dataset.cat;
            blogFilters.forEach((b) => b.classList.remove('bg-gradient-brand', 'text-primary-foreground'));
            btn.classList.add('bg-gradient-brand', 'text-primary-foreground');
            renderBlog();
        });
    });

    if (blogSearch) {
        blogSearch.addEventListener('input', renderBlog);
    }
</script>
@endpush
