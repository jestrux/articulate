const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-nested"),
        ...(isProduction ? [require("@fullhuman/postcss-purgecss")({
            content: [
                "./src/**/*.js",
                "./src/**/*.html",
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        })] : []),
    ],
};