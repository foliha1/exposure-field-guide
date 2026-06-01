insert into storage.buckets (id, name, public) values ('brand-assets', 'brand-assets', true) on conflict (id) do update set public = true;

create policy "Public read brand-assets"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'brand-assets');