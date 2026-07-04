import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chemical engineer turned enterprise AI architect. Published ML researcher, builder of enterprise AI systems, occasional trekker.",
};

export default function AboutPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <p className="eyebrow mb-4">About</p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
        Chemical engineer who ended up building enterprise AI.
      </h1>

      <div className="prose-schematic mt-10">
        <p>
          I studied Chemical Engineering with a minor in Data Science at
          BITS Pilani, which is a less strange path into AI than it sounds —
          most of what I do now is still process design: mapping how
          information actually flows through an organization, finding where
          it bottlenecks, and building the system that fixes it. I just do
          it with retrieval pipelines and agents instead of reactors.
        </p>
        <p>
          Two research papers came out of undergrad, both on applying
          machine learning to industrial chemical processes — predicting
          fuel cell performance and catalyst deactivation. That work taught
          me that a model is only as useful as the trust an expert is
          willing to place in its output, which turned out to be the
          through-line of everything I&apos;ve built since.
        </p>
        <p>
          I currently lead AI Discovery and Governance work at Tata Steel —
          part of the Tata Group, one of India&apos;s largest industrial
          conglomerates — where I built an enterprise AI assistant from zero
          to production in two months. It has since rolled out to 76,000+
          people, with 13,000+ using it daily across five group companies,
          integrated with 150+ internal data sources. The interesting part
          was never the model. It was designing the access control, audit
          trails, and escalation paths that made people willing to act on
          what it told them.
        </p>
        <p>
          The assumption I run into constantly: a 100+ year old steel
          manufacturer surely doesn&apos;t have a serious AI function. It
          does — running 860+ AI models in production and partnering
          directly with Google Cloud on enterprise-wide agentic AI at a
          scale{" "}
          <a
            href="https://www.tatasteel.com/newsroom/press-releases/india/2026/tata-steel-partners-with-google-cloud-to-deploy-a-unified-agentic-ai-across-its-global-value-chain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-signal)] underline underline-offset-4"
          >
            Google Cloud publicly called
          </a>{" "}
          &ldquo;few in the industry have achieved.&rdquo; That environment
          — heavy industry, real operational constraints, no tolerance for
          a model that&apos;s wrong at the wrong moment — is precisely what
          shaped how I think about shipping AI that has to actually work.
        </p>
        <p>
          That scope has since grown past India to the UK, Thailand, and
          Singapore entities, which pulled me into cross-border data
          transfer and data-privacy compliance work alongside the
          engineering — plus contract negotiation with cloud and AI
          infrastructure partners, and enough networking and systems
          fundamentals to hold my own in an infra conversation. That work
          shaped how I think about AI governance as much as any research
          paper did.
        </p>
        <p>
          Before that: an internship analyzing large-scale financial
          datasets for a US lender, an IT internship at Tata Steel building
          the analytics case for an internal chatbot, and two years building
          app infrastructure for a mental health startup — MASTH Life —
          where I learned that the most meaningful technology usually
          isn&apos;t the most complex.
        </p>
        <h2>Outside of work</h2>
        <p>
          I trek — Brahmatal, Chopta Chandrashila Tungnath, Kedarkanta,
          Kasol Kheerganga so far — mostly because it&apos;s the only place
          where output and performance are irrelevant. I read across
          fiction, strategy, and mental models more for the frameworks than
          for completion, and I swim and play badminton to stay sane in
          between.
        </p>
      </div>
    </Container>
  );
}
