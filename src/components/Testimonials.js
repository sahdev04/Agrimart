import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Divya Gupta",
    role: "Fertilizer Buyer",
    image: "/assets/divya1.jpg",
    review:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    name: "Sahdev",
    role: "Equipments Buyer",
    image: "/assets/divya1.jpg",
    review:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
  {
    name: "Mahatma Gandhi",
    role: "Flower seeds Buyer",
    image: "/assets/divya1.jpg",
    review:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <h2>What Our Users Say</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available but the majority
        have suffered alteration in some form.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((user, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review">"{user.review}"</p>
            <hr />
            <div className="user">
              <img src={user.image} alt={user.name} />
              <div>
                <h4>{user.name}</h4>
                <p>{user.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
