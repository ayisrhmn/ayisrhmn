import { FACTS, HERO, SOCIAL_MEDIAS, STACK_LAYERS, STACK_SPINE } from "@/lib/constants";
import {
  ArrowRightIcon,
  ArrowsDownUpIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/dist/ssr";

function StackDiagram() {
  return (
    <figure className="enter flex min-w-0 flex-[2_1_400px] flex-col gap-3 [animation-delay:160ms]">
      <div className="flex border border-border-strong bg-card">
        <div className="flex w-10 shrink-0 items-center justify-center bg-highlight">
          <span className="label rotate-180 font-medium tracking-[0.16em] whitespace-nowrap text-highlight-foreground [writing-mode:vertical-rl]">
            {STACK_SPINE}
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          {STACK_LAYERS.map((layer, index) => (
            <div key={layer.title} className="flex flex-col">
              <div className="flex flex-col gap-3.5 px-[22px] pt-5 pb-[22px]">
                <div className="label flex justify-between gap-3">
                  <span className="text-highlight">
                    {String(index + 1).padStart(2, "0")} {layer.title}
                  </span>
                  <span className="text-subtle-foreground">{layer.scope}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="border border-border-strong px-2.5 py-1.5 font-mono text-[13px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {layer.link && (
                <div className="label flex min-h-[34px] items-center gap-2.5 border-y border-dashed border-border-strong px-[22px] text-[11px] text-subtle-foreground">
                  <ArrowsDownUpIcon aria-hidden="true" className="size-3.5" />
                  {layer.link}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="font-mono text-xs text-subtle-foreground">
        Fig. 01 — The layers I work across
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="flex flex-wrap items-center gap-x-16 gap-y-14 pt-[clamp(3.5rem,7vw,6.5rem)] pb-[clamp(3rem,6vw,5rem)]"
      >
        <div className="flex min-w-0 flex-[3_1_520px] flex-col items-start gap-7">
          <p className="enter label flex items-center gap-3 text-[13px] tracking-[0.08em] text-muted-foreground">
            <span aria-hidden="true" className="h-px w-6 bg-muted-foreground" />
            {HERO.name}
          </p>
          <h1 className="font-display text-[clamp(3.25rem,7vw,6.25rem)] leading-[0.94] font-bold tracking-[-0.045em]">
            {HERO.headline[0]}
            <br />
            {HERO.headline[1]}
            <span aria-hidden="true" className="text-highlight">
              .
            </span>
          </h1>
          <p className="max-w-[35rem] text-[1.1875rem] leading-[1.6] text-pretty text-muted-foreground">
            {HERO.subHeadline}
          </p>
          <div className="enter flex flex-wrap gap-3 [animation-delay:120ms]">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <ArrowRightIcon aria-hidden="true" weight="bold" className="size-3.5" />
            </a>
            <a href="#projects" className="btn btn-outline">
              View projects
            </a>
          </div>
          <ul className="enter flex flex-wrap gap-x-6 font-mono text-[13px] text-subtle-foreground [animation-delay:200ms]">
            {SOCIAL_MEDIAS.map((item) => {
              const isEmail = item.name === "Email";
              return (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="text-link"
                  >
                    {item.name}
                    {!isEmail && <ArrowUpRightIcon aria-hidden="true" className="size-3" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <StackDiagram />
      </section>

      <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-px border border-border bg-border">
        {FACTS.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1.5 bg-background px-6 py-5">
            <dt className="label text-subtle-foreground">{fact.label}</dt>
            <dd className="text-[17px] font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
