export default function SlugPage({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>;
}
