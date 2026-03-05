const reviews = [
  {
    avatar: "/images/avatars/1.jpg",
    fullname: "Harsh Chopda",
    username: "@__harsh__43",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos cupiditate officiis dolores nobis odio?",
    date: "june 20, 2025",
    time: "03:45 PM",
  },
  {
    avatar: "/images/avatars/2.jpg",
    fullname: "Emma Brown",
    username: "@__Emma__54",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos cupiditate officiis dolores nobis odio?",
    date: "july 26, 2025",
    time: "08:47 PM",
  },
  {
    avatar: "/images/avatars/3.jpg",
    fullname: "James Anderson",
    username: "@james_101",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos cupiditate officiis dolores nobis odio?",
    date: "june 18, 2025",
    time: "07:45 PM",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center">
      <p
        className="
            text-2xl
            bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38.02%,#5C24FF_75.83%,#D94FD5_100%)]
            bg-clip-text
            text-transparent"
      >
        Testimonial
      </p>
      <h3 className="text-4xl font-medium pt-8">What Our Clients Are Saying</h3>
      <div className="grid grid-cols-3 gap-5 pt-50">
        {reviews.map((v, i) => (
          <article
            key={i}
            className="border border-neutral-900 shadow relative p-5 rounded-2xl flex flex-col gap-8  pt-16 bg-[linear-gradient(110.94deg,rgba(31,31,31,0.4)_18.07%,rgba(44,44,44,0.4)_37.31%,rgba(43,43,43,0.4)_40.55%,rgba(14,14,14,0.4)_75.52%)] text-center"
          >
            <div className="rounded-full overflow-hidden border-4 border-neutral-800 absolute size-20 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
              <img
                className="w-full h-full object-cover"
                src={v.avatar}
                alt={v.fullname}
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">{v.fullname}</h3>
              <p className="text-purple-500 text-sm">{v.username}</p>
            </div>
            <p className="text-lg text-neutral-200">{v.text}</p>
            <hr className="border-neutral-500 opacity-30" />
            <div className="flex justify-between text-sm text-neutral-400">
              <span>{v.date}</span>
              <span>{v.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
