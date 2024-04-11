import "./Content.css";

export default function Content() {
  const videoId = "zDekvcgWfH8";

  return (
    <div className="container">
      <section className="about">
        <h2>About Buryatia</h2>
        <p>
          Buryatia (Russian: Бурятия; Buryat: Буряад Улас), officially the
          Republic of Buryatia,is a republic of Russia located in the Russian
          Far East. Formerly part of the Siberian Federal District, it has been
          administered as part of the Far Eastern Federal District since 2018.
          It borders Irkutsk Oblast and Lake Baikal, the deepest lake in the
          world to the north, Zabaykalsky Krai to the east, Tuva to the west and
          Mongolia to the south. Its capital is the city of Ulan-Ude. It has an
          area of 351,300 square kilometers (135,600 sq mi) with a population of
          978,588 (2021 Census). It is home to the indigenous Buryats.
        </p>
      </section>
      <section className="study">
        <h2>Why study the Buryad language?</h2>
        <p>
          Studying the Buryad language allows one to connect with the rich
          cultural heritage, oral traditions, nomadic lifestyle and unique
          linguistics of the Buryad people, while also contributing to the
          preservation of an endangered language
        </p>
      </section>
      <section className="video">
        <h2>Buryatia through the eyes of a tourist</h2>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </div>
  );
}
