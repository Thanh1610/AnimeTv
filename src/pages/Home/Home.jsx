import Fliters from '@/layouts/components/Fliters';
import MovieList from '@/layouts/components/MovieList';

function Home() {
    return (
        <div className="bg-[#151d25]">
            <Fliters />
            <MovieList title="Đánh Giá Cao Nhất" />
        </div>
    );
}

export default Home;
