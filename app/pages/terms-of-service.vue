<script setup lang="ts">
useHead({
  title: 'Terms of Service',
});
</script>

<template>
  <div class="py-24 min-h-[60vh]">
    <section class="container mx-auto px-4 max-w-4xl">
      <div class="mb-12 text-center">
        <Badge variant="outline" class="rounded-full px-4 py-1.5 text-sm border-neutral-700 text-neutral-300 font-normal mb-6">
          Legal
        </Badge>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl text-neutral-50 mb-4">
          Terms of Service
        </h1>
        <p class="text-neutral-400">
          Last updated: {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
        </p>
      </div>

      <div class="prose prose-invert prose-neutral max-w-none space-y-12 text-neutral-300 leading-relaxed">
        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the OSE website ("Site") or any of our open source projects, you agree to be bound by these Terms of Service ("Terms") and our <NuxtLink to="/privacy-policy" class="text-white hover:underline underline-offset-4 decoration-neutral-600">
              Privacy Policy
            </NuxtLink>. If you do not agree, please do not use our Site or projects.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            2. Open Source Licensing
          </h2>
          <p>
            Our software and projects are generally made available under open source licenses (such as MIT, Apache 2.0). Your use, distribution, and modification of any OSE software are governed by the specific license applicable to that project. In the event of a conflict between these Terms and an open source license, the terms of the open source license will control.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            3. User Conduct
          </h2>
          <p>
            We are a community-driven organization. When interacting with OSE, you agree to:
          </p>
          <ul class="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
            <li>Be respectful and constructive in all communications.</li>
            <li>Not harass, abuse, or harm other users or contributors.</li>
            <li>Not upload or share any content that is illegal, offensive, or violates intellectual property rights.</li>
            <li>Comply with our Code of Conduct (available in our GitHub repositories).</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            The OSE name, logo, and brand assets are trademarks of OSE. You may use them only in accordance with our branding guidelines or with our explicit permission. All content on this Site, unless otherwise noted, is the property of OSE or its contributors.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            5. Disclaimer of Warranties
          </h2>
          <p>
            THE SITE AND ALL OSE PROJECTS ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE OR PROJECTS WILL BE ERROR-FREE OR UNINTERRUPTED.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            IN NO EVENT SHALL OSE, ITS CONTRIBUTORS, OR MAINTAINERS BE LIABLE FOR ANY DAMAGES (INCLUDING WITHOUT LIMITATION, INCIDENTAL AND CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION) RESULTING FROM THE USE OR INABILITY TO USE THE SITE OR PROJECTS, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            7. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            8. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
