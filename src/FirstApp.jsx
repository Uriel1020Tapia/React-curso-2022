
import PropTypes from 'prop-types';

const new_message = 'React let´s go!!';

const say_anything = (any) => any;

export const FirstApp = ({title, subTitle}) => {


  return (
    <>
        {/* <h1>First App in {new_message}</h1> */}
        <h4>{title}</h4>
        <h5>Hello {say_anything(new_message)}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, autem.</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: "Default text",

}
