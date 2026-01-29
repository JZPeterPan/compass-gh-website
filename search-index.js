// COMPASS-GH Site Search Index
// This file contains searchable content from all pages

const SEARCH_INDEX = [
    // Main Page (index.html) - Home
    {
        page: "Home",
        url: "index.html",
        section: "About COMPASS-GH",
        sectionId: "about",
        content: "COMPASS-GH Consensus on Metrics, Priorities, And Standards for Safe General Health AI. A global initiative to establish consensus-driven standards for AI systems used in general health queries. The COMPASS-GH initiative brings together researchers, clinicians, technologists, policymakers, and consumers worldwide to develop transparent, inclusive, and scientifically rigorous evaluation benchmarks for consumer-facing health AI."
    },
    {
        page: "Home",
        url: "index.html",
        section: "What is General Health?",
        sectionId: "general-health",
        content: "General Health is a new domain emerging at the intersection of Public Health and Clinical Medicine. Public Health addresses population-level policies, disease prevention, and community wellness. Clinical Medicine focuses on hospital-based care, diagnosis, treatment, and specialized interventions. General Health is where individuals seek AI guidance for everyday wellness, personal lifestyle, symptom interpretation, and health literacy at scale."
    },
    {
        page: "Home",
        url: "index.html",
        section: "The Challenge",
        sectionId: "challenge",
        content: "Consumer-facing health AI tools are rapidly proliferating without standardized safety evaluations. Millions of people worldwide now use AI assistants for health questions, yet no comprehensive benchmarks exist to ensure these tools provide safe, accurate, and contextually appropriate guidance. Current challenges include lack of standardized evaluation methodologies, no consensus on critical performance metrics, limited inclusion of diverse global health perspectives, and insufficient transparency in AI health guidance."
    },
    {
        page: "Home",
        url: "index.html",
        section: "Our Approach",
        sectionId: "approach",
        content: "COMPASS-GH employs a multi-phase Delphi methodology to achieve global consensus on AI health guidance standards. Phase 1 identifies key evaluation domains through expert surveys. Phase 2 refines metrics through iterative voting rounds. Phase 3 establishes consensus thresholds and implementation guidelines."
    },
    {
        page: "Home",
        url: "index.html",
        section: "Research Phases",
        sectionId: "phases",
        content: "Phase 1: Domain Identification through expert surveys to identify critical evaluation areas for consumer health AI, including safety, accuracy, accessibility, and cultural competence. Phase 2: Metric Refinement through iterative Delphi rounds to refine specific metrics, establish consensus thresholds, and validate across diverse stakeholder groups. Phase 3: Framework Implementation to develop practical benchmarking tools and implementation guidelines for real-world deployment and ongoing monitoring."
    },
    {
        page: "Home",
        url: "index.html",
        section: "Expected Outcomes",
        sectionId: "outcomes",
        content: "Standardized benchmarks for evaluating consumer health AI across diverse populations. Actionable guidelines for developers, regulators, and healthcare organizations. Enhanced transparency in AI health guidance capabilities and limitations. Global framework adaptable to regional health priorities and cultural contexts."
    },
    {
        page: "Home",
        url: "index.html",
        section: "Global Collaboration",
        sectionId: "collaboration",
        content: "COMPASS-GH brings together diverse perspectives from around the world. Our consortium includes leading academic institutions across North America, Europe, and Asia. Clinical partners from major health systems globally. AI developers committed to responsible health technology. Patient advocacy groups representing diverse communities. Regulatory advisors from multiple jurisdictions."
    },
    {
        page: "Home",
        url: "index.html",
        section: "Join the Initiative",
        sectionId: "join",
        content: "Shape the future of AI health guidance. Whether you're a researcher, clinician, technologist, policy expert, or community advocate—your perspective matters. Join our global effort to create safer, more equitable AI for everyone."
    },

    // Papers Page
    {
        page: "Papers",
        url: "papers.html",
        section: "COMPASS-GH Correspondence",
        sectionId: null,
        content: "COMPASS-GH: A Consensus Roadmap for Establishing the Rules of the Game for AI in General Health Queries. Pan J., Hager P., Schlager M. et al. This correspondence outlines the foundational framework for establishing consensus-driven standards for AI systems used in general health queries by consumers. Nature Health, 2025. Publication Pending."
    },
    {
        page: "Papers",
        url: "papers.html",
        section: "Editorial on Consumer Health AI",
        sectionId: null,
        content: "Healthy AI for Healthy Populations: The Hazards of Unregulated Consumer Health AI. Consumer-facing health AI tools need to be developed and tested against reliable benchmarks to verify their safety and usefulness for public health. Nature Health, 2025. Publication Pending."
    },

    // People Page
    {
        page: "People",
        url: "people.html",
        section: "Leadership",
        sectionId: null,
        content: "Leadership team of the COMPASS-GH initiative. Meet the researchers, clinicians, and technologists driving the COMPASS-GH initiative."
    },
    {
        page: "People",
        url: "people.html",
        section: "Team Members",
        sectionId: null,
        content: "Team Members of the COMPASS-GH initiative. Our dedicated team across multiple institutions working on AI health guidance standards."
    },

    // Contact Page
    {
        page: "Contact",
        url: "contact.html",
        section: "Contact Us",
        sectionId: null,
        content: "Get in touch with the COMPASS-GH initiative. For inquiries about collaboration, participation, or general questions, please email compass-gh@example.com"
    }
];

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.SEARCH_INDEX = SEARCH_INDEX;
}
