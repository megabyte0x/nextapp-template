/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "app-template",
    titleTemplate: "%s | app-template",
    defaultTitle: "app-template",
    description:
        "Yash Garg's app-template",
    canonical: "",
    openGraph: {
        url: "",
        title: "app-template",
        description: "Next.js + chakra-ui + TypeScript template",
        type: "website",
        images: [
            {
                url: "",
                alt: "",
                width: 800,
                height: 600,
            },
        ],
        site_name: "",
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
    },
    additionalLinkTags: [
        {
            rel: "icon",
            href: "",
        },
    ],
};

export default defaultSEOConfig;