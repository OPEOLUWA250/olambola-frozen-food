import Seo from "../components/Seo";
import { ButtonLink, WhatsAppButton } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <section className="flex min-h-[70vh] items-center justify-center bg-brand-50 px-4 pt-32 pb-20 text-center">
        <div className="max-w-lg">
          <p className="font-display text-7xl font-extrabold text-brand-200">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            This page swam away
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The page you're looking for doesn't exist or has moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/" size="lg">
              Back to home
            </ButtonLink>
            <WhatsAppButton variant="outline" size="lg">
              Chat with us
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
