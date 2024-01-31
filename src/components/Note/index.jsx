import { Container } from './styles';
import { Tag } from '../Tag';
import { Star } from '../Star';

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <div class="title">
        <h1>{ data.title }</h1>
        <div class="star">
          <Star isOn />
          <Star isOn />
          <Star isOn />
          <Star isOn />
          <Star isOff />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam minima architecto sed voluptatum eos quod. Mollitia perferendis ad, architecto doloribus suscipit sequi iusto quam atque, nostrum quo necessitatibus neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem impedit totam ut repellat officiis? Libero porro pariatur odio doloribus natus inventore, voluptates qui, aspernatur, id laboriosam ipsam! Exercitationem, nihil nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dignissimos suscipit rerum alias fugit, quasi tempore enim illum, laborum soluta assumenda voluptatum! Iste odio tempora aspernatur, sit accusantium minus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ex vitae molestias quas blanditiis omnis voluptas doloribus, mollitia modi, ipsam maxime distinctio. Quod sed totam omnis temporibus nihil repellat itaque.
      </p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}