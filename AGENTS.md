<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the connected GitHub account AphelionMX (hola@aphelion.mx) for repository writes. The user chose the agency account over iscmrcd. Keep any local author identity scoped to the operation or worktree, not global Git settings.
- Keep the home banner's scroll-responsive wave field in a canvas component, with its light/dark palette in global CSS; this maintains a consistent visual while honoring reduced motion.
- Centralize Meta initialization, permission and deduplication in src/lib/pixel.ts. Initial and router PageViews share trackPageView's pathname guard; language/query-only changes do not create extra views.
