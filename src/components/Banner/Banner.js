import React from 'react';
import img from '../../images/bd-img.png'

const Banner = () => {
    return (
        <div className='lg:flex p-5 justify-evenly invert'>
            <div className='lg:w-1/2 lg:mt-10'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id et dolor sapiente inventore, beatae ipsum eius odio minima dolorum asperiores voluptate adipisci sint debitis dignissimos deserunt atque officiis quae quaerat libero placeat voluptas corrupti quos veniam temporibus! Aperiam sit doloremque aliquid illo quisquam nobis quas ipsa culpa earum molestiae, accusamus natus ullam qui rerum at obcaecati impedit exercitationem, commodi ex expedita nostrum, quis veniam minus pariatur? Modi magni incidunt aut facilis, blanditiis aspernatur, quidem nesciunt numquam accusamus accusantium placeat, rerum esse optio similique veritatis quo autem. Enim aut, nulla hic, tempore corporis laborum iusto numquam aliquam, labore alias dolor exercitationem? Ex nihil omnis ipsa aperiam, fugit inventore reiciendis provident sit in delectus sint magnam sed quasi modi eum repellendus! Explicabo ducimus cupiditate mollitia, cumque, laboriosam perferendis maxime deleniti accusamus amet veritatis voluptatibus velit, quibusdam vero doloremque praesentium porro quia. Molestias aut sit expedita velit culpa et voluptatibus consequatur tempora alias vel? Animi sequi maxime porro asperiores harum ullam facere laboriosam impedit nemo. Veniam autem, incidunt voluptatem necessitatibus quas repellat quam explicabo repudiandae exercitationem, eligendi officia dolor adipisci non minima fugit obcaecati molestias, accusantium optio perspiciatis vel. Quibusdam eos recusandae doloribus obcaecati libero, id laborum dolorem modi eaque odio tenetur totam.</p>
            </div>
            <div className=''>
                <img className='w-96' src={img} alt="img" />
            </div>
        </div>
    );
};

export default Banner;