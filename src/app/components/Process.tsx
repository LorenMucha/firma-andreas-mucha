import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import de from "@/locales/de.json";

const icons = [
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlineWrenchScrewdriver,
  HiOutlineCheckCircle,
];

const Process = (): React.JSX.Element => (
  <section id={de.anchors.ablauf} className="section-pad py-16 sm:py-20">
    <div className="card p-8 sm:p-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="tag">Ablauf</div>
          <h2 className="mt-4">{de.sections.ablauf.title}</h2>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {de.sections.ablauf.steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <div key={step.title} className="rounded-3xl border border-ink-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sand-100 text-copper-500">
                  <Icon size={20} />
                </span>
                <h3 className="text-xl text-ink-900">{step.title}</h3>
              </div>
              <p className="mt-3 text-base text-ink-700">{step.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Process;
