export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
