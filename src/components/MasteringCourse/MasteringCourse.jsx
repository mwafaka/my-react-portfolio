
import "./MasteringCourse.scss";


const MasteringCourse = () => {
    return (
        <section className='mastering'>
            <div className='mastering__content'>
                <h1>
                    Currently <span>Mastering Java & C#</span>
                </h1>
                <p>
                    I’m actively engaged in <strong>9 intensive Java courses</strong> and a <strong>C# IHK certification program</strong>.
                    This journey is shaping me into a highly skilled developer ready for enterprise-level challenges.
                </p>
            </div>

            <div className='mastering__image' >
                <img src={'https://images.pexels.com/photos/4069293/pexels-photo-4069293.jpeg'} alt="Mastering Java and C# Courses" />
            </div>
        </section>
    );
};

export default MasteringCourse;
