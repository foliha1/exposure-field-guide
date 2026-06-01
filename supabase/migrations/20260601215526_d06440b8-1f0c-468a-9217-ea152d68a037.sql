drop policy if exists "Public read brand-assets" on storage.objects;

create policy "Public read approved brand-assets"
on storage.objects for select
to anon, authenticated
using (
  bucket_id = 'brand-assets'
  and name in (
    'logo-pack.zip',
    'color-file.zip',
    'fonts.zip',
    'brand-guide.pdf'
  )
);