'use client';

export default function NewsList({ data }) {
  if (!Array.isArray(data)) {
    return (
      <div className="text-center text-red-500 py-6">
        Ma'lumotlar mavjud emas yoki noto'g'ri formatda keldi.
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="mt-2 text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
