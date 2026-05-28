<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'Serendib Software Solutions' }}</title>
    <meta name="description" content="{{ $description ?? 'Premium software engineering for ambitious teams.' }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/theme.css') }}">
</head>
<body>
    <div class="min-h-screen flex flex-col">
        <header id="site-header" class="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4">
            <div class="mx-auto max-w-7xl px-4">
                <div id="site-header-shell" class="flex items-center justify-between rounded-2xl px-4 py-3 transition-all">
                    <a href="{{ route('home') }}" class="flex items-center gap-2.5 group">
                        <img src="{{ asset('images/logo.png') }}" alt="Serendib" class="h-9 w-9 rounded-lg object-cover" />
                        <span class="font-display text-base font-semibold tracking-tight">
                            Serendib
                            <span class="block text-xs font-normal text-muted-foreground mt-0.5">Software Solutions</span>
                        </span>
                    </a>

                    <nav class="hidden lg:flex items-center gap-1">
                        @php
                            $navItems = [
                                ['label' => 'Home', 'route' => 'home'],
                                ['label' => 'About', 'route' => 'about'],
                                ['label' => 'Services', 'route' => 'services'],
                                ['label' => 'Portfolio', 'route' => 'portfolio'],
                                ['label' => 'Careers', 'route' => 'careers'],
                                ['label' => 'Blog', 'route' => 'blog'],
                                ['label' => 'Contact', 'route' => 'contact'],
                            ];
                        @endphp
                        @foreach ($navItems as $item)
                            <a href="{{ route($item['route']) }}" class="px-3.5 py-2 rounded-lg text-sm transition-colors {{ request()->routeIs($item['route']) ? 'text-foreground bg-white/5' : 'text-muted-foreground hover:text-foreground' }}">
                                {{ $item['label'] }}
                            </a>
                        @endforeach
                    </nav>

                    <div class="flex items-center gap-2">
                        <a href="{{ route('contact') }}" class="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring hover:scale-[1.03] transition-transform">
                            Start a project
                        </a>
                        <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg glass" aria-label="Toggle menu" type="button">
                            <svg id="menu-open-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </svg>
                            <svg id="menu-close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 hidden">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="mobile-menu" class="hidden lg:hidden mt-2 rounded-2xl glass p-3 animate-fade-up">
                    @foreach ($navItems as $item)
                        <a href="{{ route($item['route']) }}" class="block px-4 py-2.5 rounded-lg text-sm hover:bg-white/5">{{ $item['label'] }}</a>
                    @endforeach
                    <a href="{{ route('contact') }}" class="block mt-2 text-center rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-medium text-primary-foreground">
                        Start a project
                    </a>
                </div>
            </div>
        </header>

        <main class="flex-1 pt-24">
            @yield('content')
        </main>

        <footer class="relative mt-32 border-t border-border/60">
            <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
            <div class="relative mx-auto max-w-7xl px-4 py-16">
                <div class="grid gap-12 lg:grid-cols-5">
                    <div class="lg:col-span-2 space-y-5">
                        <a href="{{ route('home') }}" class="flex items-center gap-3">
                            <img src="{{ asset('images/logo.png') }}" alt="Serendib logo" class="h-11 w-11 rounded-xl" />
                            <div>
                                <div class="font-display text-lg font-semibold">Serendib</div>
                                <div class="text-xs text-muted-foreground">Software Solutions</div>
                            </div>
                        </a>
                        <p class="text-sm text-muted-foreground max-w-sm leading-relaxed">
                            We build premium software for ambitious teams from custom platforms and mobile apps to AI and cloud systems.
                        </p>
                        <div class="flex gap-2">
                            <a href="#" class="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.3 0 6.8-2 6.8-9A7 7 0 0 0 20 3.8a6.5 6.5 0 0 0-.1-1.8s-1.1-.4-3.6 1.4a12.3 12.3 0 0 0-6.3 0C7.5 1.6 6.4 2 6.4 2A6.5 6.5 0 0 0 6.3 3.8 7 7 0 0 0 5.5 5.7c0 7 3.5 9 6.8 9A4.8 4.8 0 0 0 11 18v4"></path>
                                    <path d="M9 18c-4.5 2-5-2-7-2"></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61577909078210" target="_blank" rel="noopener noreferrer" class="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" class="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm font-medium mb-4">Company</div>
                        <ul class="space-y-2.5 text-sm text-muted-foreground">
                            <li><a href="{{ route('about') }}" class="hover:text-foreground">About</a></li>
                            <li><a href="{{ route('careers') }}" class="hover:text-foreground">Careers</a></li>
                            <li><a href="{{ route('blog') }}" class="hover:text-foreground">Blog</a></li>
                            <li><a href="{{ route('portfolio') }}" class="hover:text-foreground">Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <div class="text-sm font-medium mb-4">Services</div>
                        <ul class="space-y-2.5 text-sm text-muted-foreground">
                            <li>Custom Software</li>
                            <li>Web and Mobile</li>
                            <li>AI and Cloud</li>
                            <li>UI and UX Design</li>
                        </ul>
                    </div>
                    <div>
                        <div class="text-sm font-medium mb-4">Contact</div>
                        <ul class="space-y-2.5 text-sm text-muted-foreground">
                            <li class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mt-0.5" aria-hidden="true">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-10 5L2 7"></path>
                                </svg>
                                srendibsoftwaresolutions@gmail.com
                            </li>
                            <li class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mt-0.5" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.62 2.35a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.73-1.28a2 2 0 0 1 2.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                +94 74 018 7747
                            </li>
                            <li class="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mt-0.5" aria-hidden="true">
                                    <path d="M20 10c0 4.993-5.539 9.193-7.399 10.53a1 1 0 0 1-1.202 0C9.539 19.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                Alawwa, Sri Lanka
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <div>© {{ now()->year }} Serendib Software Solutions. All rights reserved.</div>
                    <div class="flex gap-5">
                        <a href="#" class="hover:text-foreground">Privacy</a>
                        <a href="#" class="hover:text-foreground">Terms</a>
                        <a href="#" class="hover:text-foreground">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>

        <a href="https://wa.me/94740187747" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
           class="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform motion-safe:animate-bounce">
            <svg viewBox="0 0 24 24" class="h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
            </svg>
        </a>
    </div>

    <script>
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuOpenIcon = document.getElementById('menu-open-icon');
        const menuCloseIcon = document.getElementById('menu-close-icon');
        const siteHeader = document.getElementById('site-header');
        const siteHeaderShell = document.getElementById('site-header-shell');

        const syncHeaderScrollState = () => {
            const scrolled = window.scrollY > 16;
            if (!siteHeader || !siteHeaderShell) {
                return;
            }

            siteHeader.classList.toggle('py-2', scrolled);
            siteHeader.classList.toggle('py-4', !scrolled);
            siteHeaderShell.classList.toggle('glass', scrolled);
            siteHeaderShell.classList.toggle('shadow-[var(--shadow-card)]', scrolled);
        };

        syncHeaderScrollState();
        window.addEventListener('scroll', syncHeaderScrollState);

        if (menuBtn && menu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = menu.classList.toggle('hidden');
                if (menuOpenIcon && menuCloseIcon) {
                    menuOpenIcon.classList.toggle('hidden', !isHidden);
                    menuCloseIcon.classList.toggle('hidden', isHidden);
                }
            });
        }
    </script>
    @stack('scripts')
</body>
</html>
