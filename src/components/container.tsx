import { Fragment, HTMLAttributes, ReactNode, Ref } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft as Left, MdArrowOutward as LinkIcon } from "react-icons/md";
import { LinkTag } from "./link";

interface Props extends HTMLAttributes<HTMLDivElement> {
  getBack?: boolean;
  children: ReactNode;
  title: string;
  description?: string;
  defaultView?: boolean;
  link?: string;
  forwardRef?: Ref<HTMLDivElement>;
}

const Container = ({ getBack, children, title, description, defaultView, link, forwardRef, ...rest }: Props) => {
  return (
    <div
      ref={forwardRef}
      className="flex items-center justify-center min-h-screen pt-12 pb-12 transition-transform duration-1000 transform"
      {...rest}
    >
      <div className="w-[60%] max-md:w-[85%] flex flex-col gap-2">
        {getBack && (
          <Link to="/" preventScrollReset className="transition-colors cursor-pointer hover:text-zinc-300 w-fit">
            <div className="flex items-center gap-1">
              <Left size={32} />
              <span>get back</span>
            </div>
          </Link>
        )}
        <div className="flex items-center justify-between gap-2 p-1 border border-zinc-700">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="pb-1 text-3xl font-semibold max-sm:text-xl">{title}</h1>
            {description && (
              <Fragment>
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-sm font-normal text-zinc-300">{description}</span>
              </Fragment>
            )}
          </div>
          {link && (
            <LinkTag
              className="flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-zinc-300"
              href={link}
            >
              Visit
              <LinkIcon size={18} />
            </LinkTag>
          )}
        </div>
        {defaultView ? <div className="p-1 border border-zinc-700">{children}</div> : children}
      </div>
    </div>
  );
};

export default Container;
