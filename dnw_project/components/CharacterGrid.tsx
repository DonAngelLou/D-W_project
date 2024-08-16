const CharacterGrid = () => (
    <section className="grid grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="character-card">
        <img src="/images/character1.jpg" alt="Character 1" />
        <h3 className="mt-4 text-xl font-semibold">Character Grid</h3>
        <p className="mt-2">Description of Character 1.</p>
      </div>
      {/* Repeat for more characters */}
    </section>
  );
  
  export default CharacterGrid;
  