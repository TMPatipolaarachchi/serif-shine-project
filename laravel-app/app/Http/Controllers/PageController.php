<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function home()
    {
        $services = [
            ['title' => 'Custom Software', 'desc' => 'Bespoke platforms engineered to fit your business model.'],
            ['title' => 'Web Development', 'desc' => 'Lightning-fast, accessible, beautifully designed web apps.'],
            ['title' => 'Mobile Apps', 'desc' => 'Native-feeling iOS and Android products users love.'],
            ['title' => 'AI Solutions', 'desc' => 'LLMs, RAG pipelines, copilots, and intelligent automation.'],
            ['title' => 'Cloud Solutions', 'desc' => 'Scalable infrastructure on AWS, GCP, and Azure.'],
            ['title' => 'LMS Development', 'desc' => 'Modern learning platforms with assessments and analytics.'],
            ['title' => 'ERP Systems', 'desc' => 'Unified operations, finance, HR and supply-chain systems.'],
            ['title' => 'UI/UX Design', 'desc' => 'Research-led design that turns users into fans.'],
            ['title' => 'API Integrations', 'desc' => 'Connect anything to anything with reliable contracts.'],
            ['title' => 'E-commerce', 'desc' => 'High-converting storefronts, headless or full-stack.'],
            ['title' => 'Maintenance & Support', 'desc' => '24/7 monitoring, SLAs, and continuous improvement.'],
            ['title' => 'Cybersecurity', 'desc' => 'Audits, hardening, and zero-trust architectures.'],
        ];

        $why = [
            ['title' => 'Ship in weeks, not quarters', 'desc' => 'Tight, senior squads using modern tooling.'],
            ['title' => 'Enterprise standards', 'desc' => 'SOC-2 mindset, security and accessibility by default.'],
            ['title' => 'Performance obsessed', 'desc' => 'Real-user metrics, edge delivery, sub-second loads.'],
            ['title' => 'True partnership', 'desc' => 'Transparent process, async-first, deeply embedded.'],
        ];

        $process = [
            ['n' => '01', 't' => 'Discover', 'd' => 'Workshops, audits, and crisp goals.'],
            ['n' => '02', 't' => 'Design', 'd' => 'Prototypes that feel real on day one.'],
            ['n' => '03', 't' => 'Build', 'd' => 'Two-week sprints with live demos.'],
            ['n' => '04', 't' => 'Launch', 'd' => 'Performance, security, and SEO baked in.'],
            ['n' => '05', 't' => 'Evolve', 'd' => 'Continuous iteration with data.'],
        ];

        $testimonials = [
            ['name' => 'Aisha N.', 'role' => 'CTO, Fintech', 'quote' => 'Serendib rebuilt our core platform in 12 weeks. The polish is unreal.'],
            ['name' => 'Marcus L.', 'role' => 'Founder, SaaS', 'quote' => 'Senior team, sharp design, and they actually ship. Rare combo.'],
            ['name' => 'Priya R.', 'role' => 'Head of Product', 'quote' => 'Best engineering partner we have worked with, period.'],
        ];

        $portfolioTeaser = [
            ['title' => 'Nimbus AI', 'category' => 'AI Platform'],
            ['title' => 'Atlas Bank', 'category' => 'Fintech'],
            ['title' => 'Lumen LMS', 'category' => 'EdTech'],
            ['title' => 'Mercato', 'category' => 'E-commerce'],
            ['title' => 'Pulse Health', 'category' => 'Healthcare'],
            ['title' => 'Orbital ERP', 'category' => 'Enterprise'],
        ];

        $faqs = [
            ['q' => 'How quickly can we start?', 'a' => 'Most engagements kick off within 1-2 weeks of signing.'],
            ['q' => 'Do you work with startups?', 'a' => 'Yes, from pre-seed MVPs to Series C scaling.'],
            ['q' => 'What is your pricing model?', 'a' => 'Fixed-scope, time and materials, or dedicated squads.'],
            ['q' => 'Do you sign NDAs?', 'a' => 'Always. Your IP and data stay yours.'],
        ];

        $stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'Rust', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'OpenAI', 'LangChain', 'TensorFlow', 'Figma'];

        return view('pages.home', compact('services', 'faqs', 'stack', 'why', 'process', 'testimonials', 'portfolioTeaser'));
    }

    public function about()
    {
        $values = [
            ['title' => 'Clarity', 'desc' => 'Crisp thinking, simple solutions, no jargon.'],
            ['title' => 'Craft', 'desc' => 'Pixel-perfect design backed by rigorous engineering.'],
            ['title' => 'Care', 'desc' => 'We treat your product like our own.'],
            ['title' => 'Candor', 'desc' => 'Honest opinions, even when they are uncomfortable.'],
        ];

        $team = [
            ['name' => 'Ravindu Perera', 'role' => 'Founder & CEO'],
            ['name' => 'Anika Silva', 'role' => 'Head of Design'],
            ['name' => 'Kasun Jayawardena', 'role' => 'Engineering Lead'],
            ['name' => 'Dilani Fernando', 'role' => 'Product Director'],
            ['name' => 'Sahan Kumara', 'role' => 'AI Practice Lead'],
            ['name' => 'Nuwan Bandara', 'role' => 'Cloud Architect'],
        ];

        $timeline = [
            ['year' => '2018', 'text' => 'Founded in Colombo with a 4-person team.'],
            ['year' => '2020', 'text' => 'Crossed 25 projects and our first global client.'],
            ['year' => '2022', 'text' => 'Opened AI and cloud practices. Team grew to 30.'],
            ['year' => '2024', 'text' => '100+ projects, partners in 14 countries.'],
            ['year' => '2026', 'text' => 'Launched Serendib Labs open-source tooling.'],
        ];

        return view('pages.about', compact('values', 'team', 'timeline'));
    }

    public function services()
    {
        $items = [
            ['title' => 'Custom Software Development', 'desc' => 'Bespoke platforms engineered around your business logic and growth path.'],
            ['title' => 'Web Development', 'desc' => 'High-performance websites and web applications with premium UX.'],
            ['title' => 'Mobile App Development', 'desc' => 'Native-feeling iOS and Android experiences users love.'],
            ['title' => 'AI Solutions', 'desc' => 'LLM apps, RAG pipelines, agents, copilots, and automations.'],
            ['title' => 'Cloud Solutions', 'desc' => 'Scalable, secure infrastructure with IaC by default.'],
            ['title' => 'LMS Development', 'desc' => 'Modern learning platforms with assessments, analytics, and gamification.'],
            ['title' => 'ERP Systems', 'desc' => 'Unified operations, finance, HR, and supply chain built or extended.'],
            ['title' => 'UI/UX Design', 'desc' => 'Research-led product design that turns users into advocates.'],
            ['title' => 'API Integrations', 'desc' => 'Connect anything to anything with reliable contracts and observability.'],
            ['title' => 'E-commerce Solutions', 'desc' => 'High-converting storefronts headless, Shopify, or fully custom.'],
            ['title' => 'Maintenance & Support', 'desc' => '24/7 monitoring, SLAs, and a senior team you can actually reach.'],
            ['title' => 'Cybersecurity Services', 'desc' => 'Audits, hardening, penetration testing, and zero-trust architecture.'],
        ];

        return view('pages.services', compact('items'));
    }

    public function portfolio()
    {
        $projects = [
            ['title' => 'Nimbus AI', 'category' => 'AI', 'desc' => 'An LLM-powered analytics platform handling 12M queries per month.'],
            ['title' => 'Atlas Bank', 'category' => 'Fintech', 'desc' => 'Modern banking experience with biometric auth and instant transfers.'],
            ['title' => 'Lumen LMS', 'category' => 'EdTech', 'desc' => 'A learning platform used by 40+ universities.'],
            ['title' => 'Mercato', 'category' => 'E-commerce', 'desc' => 'Headless commerce stack with personalized recommendations.'],
            ['title' => 'Pulse Health', 'category' => 'Healthcare', 'desc' => 'HIPAA-compliant patient portal with telehealth and AI triage.'],
            ['title' => 'Orbital ERP', 'category' => 'Enterprise', 'desc' => 'End-to-end ERP for logistics with 8K shipments per day.'],
            ['title' => 'Beacon', 'category' => 'AI', 'desc' => 'Internal AI knowledge agent for a 4,000-person engineering org.'],
            ['title' => 'Verdant', 'category' => 'E-commerce', 'desc' => 'Sustainable D2C storefront with subscriptions and loyalty.'],
        ];

        return view('pages.portfolio', compact('projects'));
    }

    public function careers()
    {
        $jobs = [
            ['title' => 'Senior Full-Stack Engineer', 'location' => 'Remote - Global', 'details' => 'TypeScript, React, Node, Postgres'],
            ['title' => 'Staff AI Engineer', 'location' => 'Remote - Global', 'details' => 'LLMs, RAG, agentic systems'],
            ['title' => 'Senior Product Designer', 'location' => 'Colombo / Remote', 'details' => 'Figma, motion, design systems'],
            ['title' => 'DevOps / Platform Engineer', 'location' => 'Remote - Global', 'details' => 'Kubernetes, Terraform, observability'],
            ['title' => 'Mobile Engineer (iOS/Android)', 'location' => 'Remote - Global', 'details' => 'Swift, Kotlin, React Native'],
        ];

        $perks = [
            ['title' => 'Remote-first', 'desc' => 'Work from anywhere with quarterly meetups.'],
            ['title' => 'Health & wellness', 'desc' => 'Premium insurance and a yearly wellness stipend.'],
            ['title' => 'Learning budget', 'desc' => '1500 USD/year for courses, conferences, and books.'],
            ['title' => 'Async-first', 'desc' => 'Deep work over status meetings.'],
            ['title' => 'Equity for all', 'desc' => 'Every full-time employee shares the upside.'],
            ['title' => 'Generous PTO', 'desc' => '30 days off plus local holidays.'],
        ];

        return view('pages.careers', compact('jobs', 'perks'));
    }

    public function blog()
    {
        $posts = [
            ['title' => 'Designing for trust in financial apps', 'category' => 'Design', 'date' => 'May 12, 2026', 'excerpt' => 'How visual hierarchy, motion, and copy shape user confidence.'],
            ['title' => 'RAG is not dead - you are doing it wrong', 'category' => 'AI', 'date' => 'Apr 28, 2026', 'excerpt' => 'Five patterns that make retrieval-augmented apps actually work.'],
            ['title' => 'From idea to MVP in 8 weeks', 'category' => 'Process', 'date' => 'Apr 14, 2026', 'excerpt' => 'Our exact playbook for shipping polished MVPs fast.'],
            ['title' => 'Edge-first architecture in 2026', 'category' => 'Engineering', 'date' => 'Mar 30, 2026', 'excerpt' => 'Why the edge changes how we think about state.'],
            ['title' => 'Hiring senior engineers without burning out', 'category' => 'Team', 'date' => 'Mar 18, 2026', 'excerpt' => 'A pragmatic process that respects everyone\'s time.'],
            ['title' => 'The minimal viable design system', 'category' => 'Design', 'date' => 'Mar 02, 2026', 'excerpt' => 'Start small, ship, iterate. A practical guide.'],
        ];

        return view('pages.blog', compact('posts'));
    }

    public function contact()
    {
        return view('pages.contact');
    }
}
