import RedditLogo from "@images/social/reddit.svg";
import FacebookLogo from "@images/social/facebook.svg";
import TwitterLogo from "@images/social/twitter.svg";
import Share from "@images/social/share.svg";
import ThreeDots from "@images/three-dots.svg";

import styles from "./share.module.scss";
import { useEffect, useMemo, useRef, useState } from "react";

import cx from "classnames";

const TOAST_CLOSE_TIME_MS = 5000;

type ShareButtonsProps = {
  title: string;
  text: string;
  url?: string;
};
const ShareButtons: React.FC<ShareButtonsProps> = ({ title, text, url }) => {
  const [isSocialButtonsOpen, setIsSocialButtonsOpen] = useState(false);
  const [isClipboardToastOpen, setIsClipboardToastOpen] = useState(false);
  const horriblescopeLink = "https://horriblescope.com";

  const socialMobileRef = useRef<HTMLDivElement>(null);

  const shareClickHandler = async () => {
    // @ts-ignore: checking if canShare is supported
    if (navigator.canShare) {
      await navigator.share({
        title,
        text,
        url: url ?? window?.location.href,
      });
    } else {
      navigator.clipboard?.writeText(url ?? window?.location.href);
      setIsClipboardToastOpen(true);
    }
  };

  useEffect(() => {
    if (isClipboardToastOpen) {
      setTimeout(() => setIsClipboardToastOpen(false), TOAST_CLOSE_TIME_MS);
    }
  }, [isClipboardToastOpen]);

  // click outside to close social buttons on mobile
  useEffect(() => {
    const clickOutsideListener = (event: any) => {
      if (
        socialMobileRef.current &&
        !socialMobileRef.current.contains(event.target)
      ) {
        setIsSocialButtonsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideListener, true);
    () => {
      document.removeEventListener("mousedown", clickOutsideListener, true);
    };
  }, []);

  const socialButtons = useMemo(
    () => (
      <>
        <a
          href={`http://www.reddit.com/submit?url=${horriblescopeLink}&title=Horriblescope`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <RedditLogo />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${horriblescopeLink}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookLogo />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Check out today's Horriblescope!&url=${horriblescopeLink}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterLogo />
        </a>
      </>
    ),
    []
  );

  return (
    <>
      <div className={styles.socialIcons}>
        <button className={styles.shareButton} onClick={shareClickHandler}>
          <Share />
        </button>
        <div className={styles.desktopSocial}>{socialButtons}</div>
        <div className={styles.mobileSocial} ref={socialMobileRef}>
          <ThreeDots onClick={() => setIsSocialButtonsOpen((prev) => !prev)} />
          {isSocialButtonsOpen && (
            <div className={styles.mobileSocialDropdown}>{socialButtons}</div>
          )}
        </div>
      </div>
      <div
        className={cx(styles.copiedToast, {
          [styles.toastAnimate]: isClipboardToastOpen,
        })}
      >
        <p>Copied to Clipboard</p>
      </div>
    </>
  );
};

export default ShareButtons;
