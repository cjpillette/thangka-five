import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import Aux from 'hoc/Aux';
import Logo from 'components/ui/Logo';

const stages = [
  { title: 'Stage de 3 jours',
    who: '',
    when: '',
    where: '',
    description: 'this is all about the first training.its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors'
  },
  { title: 'Stage de 5 jours',
    who: '',
    when: '',
    where: '',
    description: 'this is all about the first training.its layout. The point of using Lorem Ipsum is that it has a blabblablbalbalbalbalbla letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors'
  },
  { title: 'Stage de 10 jours',
    who: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius pharetra mi non tincidunt. Praesent pharetra, elit sit amet consectetur aliquam, urna justo placerat massa, sed auctor nisl magna in justo. Nam ante erat, accumsan sed consectetur sed, egestas in lectus. Aliquam rutrum lorem sit amet risus faucibus volutpat. Praesent quis justo sed dui pretium congue. Nullam mattis leo orci, dapibus laoreet purus pharetra eget. Sed fermentum aliquet ex a dignissim. Praesent tincidunt sodales malesuada. Sed varius quis nisl vel fermentum. Nam ac velit ipsum. Vivamus in magna odio.',
    where: 'Duis enim enim, consectetur in pretium eget, consequat non libero. In gravida ut turpis eget porttitor. Praesent fermentum dignissim massa vitae facilisis. Praesent laoreet sapien sed condimentum rutrum. In hac habitasse platea dictumst. Fusce tincidunt ipsum non velit dapibus ultricies. Vivamus nisl ipsum, finibus vitae odio vestibulum, lacinia pretium massa. Morbi ante velit, porttitor tristique commodo et, convallis eu quam.',
    when: 'Proin non nisl quis arcu venenatis facilisis. Donec feugiat lorem vel arcu eleifend, ac blandit tortor ultricies. Morbi ut finibus nulla, nec convallis lorem.',
    price: 300,
    introduction: 'Pellentesque non justo feugiat lectus aliquam aliquam tempor non arcu. Morbi ultricies et orci ut egestas. Nunc nec tristique arcu. Phasellus ullamcorper turpis id ante semper, at bibendum mauris efficitur. Mauris nec blandit mi. Etiam accumsan pretium neque, vitae porttitor risus. Sed ut condimentum mauris',
    description: 'this is all about the first training.its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingccccdcddcdcdcs',
      step1: 'Phasellus consectetur turpis mi, lacinia fringilla orci sagittis quis. Suspendisse ligula ligula, facilisis eget convallis quis, finibus vel odio. Sed mi erat, convallis sed ante et, faucibus ullamcorper mauris. Quisque luctus, velit in molestie semper, lorem nibh rutrum diam, non mattis lacus lorem id mauris. Proin tortor turpis, varius sit amet vestibulum eget, placerat pretium nulla. Phasellus vitae sem bibendum, suscipit ante ut, semper ex. Duis egestas mattis lectus non egestas',
      step2: 'non mattis lacus lorem id mauris. Proin tortor turpis, varius sit amet vestibulum eget, placerat pretium nulla.',
      step3: 'Pellentesque facilisis porta venenatis. Fusce auctor maximus nulla, ac blandit orci faucibus ac. Suspendisse sit amet vulputate turpis, id efficitur metus. Aenean fermentum sed elit quis pellentesque. Nunc sapien nibh, mattis blandit eros eu, convallis dictum est. Curabitur nisl mauris, auctor id posuere ut, vehicula id ipsum. Nulla facilisi. Proin dignissim iaculis sodales. Ut dignissim justo nisl, pellentesque congue neque condimentum ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat fermentum venenatis. Quisque feugiat nisl at felis tempus, id fermentum justo dapibus. Praesent elementum finibus venenatis.'
  },
]

const trainingsList = () => (
  <Tabs>
  {stages.map( stage => (
    <Tab key={stage.title} label={stage.title} >
     <div style={{backgroundColor: 'white'}}>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div>
          <h4>Pour qui?</h4>
          <p>{stage.who}</p>
        </div>
        <div>
          <h4>Quand?</h4>
          <p>{stage.when}</p>
        </div>
        <div>
          <h4>Ou?</h4>
          <p>{stage.where}</p>
        </div>
      </div>
      <h4>Au program</h4>
      <div>{stage.introduction}</div>
      <div>{stage.step1}</div>
      <div>{stage.step2}</div>
      <div>{stage.step3}</div>
     </div>
    </Tab>
  ) )}
  </Tabs>
  );

export default trainingsList;