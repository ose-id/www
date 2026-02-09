<script setup lang="ts">
useHead({
  title: 'Privacy Policy',
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
          Privacy Policy
        </h1>
        <p class="text-neutral-400">
          Last updated: {{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
        </p>
      </div>

      <div class="prose prose-invert prose-neutral max-w-none space-y-12 text-neutral-300 leading-relaxed">
        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            1. Introduction
          </h2>
          <p>
            Welcome to OSE ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and with our open source projects. This
            Privacy Policy explains how we handle information in our community-driven environment.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            2. Information Capabilities
          </h2>
          <p>As an open source organization, we prioritize transparency and minimal data collection.</p>
          <ul class="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
            <li>
              <strong class="text-neutral-200">Website Visits:</strong> We may collect anonymous usage data (such as page views and browser type) to understand how our documentation and tools are
              used, helping us improve the community experience.
            </li>
            <li>
              <strong class="text-neutral-200">Community Interaction:</strong> When you contribute to our repositories on GitHub or join our community discussions (e.g., Discord), your public profile
              information and contributions are visible to the public in accordance with those platforms' own privacy policies.
            </li>
            <li>
              <strong class="text-neutral-200">Voluntary Information:</strong> If you contact us directly or sign up for any newsletters, we collect the information you provide (like your email
              address) solely to communicate with you.
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            3. Use of Information
          </h2>
          <p>We use the limited information we collect to:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
            <li>Maintain and improve our open source projects and website.</li>
            <li>Respond to your comments, questions, and pull requests.</li>
            <li>Send you technical notices, updates, security alerts, and support messages if you have opted in to receive them.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our projects.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            4. Data Sharing
          </h2>
          <p>We do not sell your personal data. We may share information only in the following limited circumstances:</p>
          <ul class="list-disc pl-6 space-y-2 mt-4 text-neutral-400">
            <li>With your consent or at your direction.</li>
            <li>With service providers who help us operate our community infrastructure (e.g., hosting providers), subject to confidentiality obligations.</li>
            <li>If required by law or to protect the rights and safety of OSE, our contributors, or others.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            5. Third-Party Services
          </h2>
          <p>
            Our projects and website may contain links to third-party websites or services (such as GitHub, Discord, Twitter/X, Bluesky). We are not responsible for the privacy practices of these
            third parties. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            6. Changes to This Policy
          </h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-neutral-100 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our practices, please open an issue on our
            <a href="https://github.com/ose-id" target="_blank" class="text-white hover:underline underline-offset-4 decoration-neutral-600">GitHub repository</a> or contact a community maintainer.
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
