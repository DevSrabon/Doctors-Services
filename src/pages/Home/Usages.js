import React from 'react';
import img from '../../assets/head_pain.webp'
const Usages = () => {
    return (
			<div>
				<h1 className="text-5xl font-bold text-end my-16">
					When to use Doctor Service?
				</h1>
				<div className="lg:flex gap-4 w-11/12 mx-auto mb-5">
					<img className="w-90%" src={img} alt="" />

					<div className="flex flex-col lg:gap-36 gap-12">
						<div>
							<h4 className="text-4xl font-semibold mb-5">
								Common health issue
							</h4>
							<p>
								Ask anything you would normally ask your GP. You can have an
								instant video with one of our GPs via a digital consultation
								from anywhere, at any time of day.
							</p>
						</div>
						<div>
							<h4 className="text-4xl font-semibold mb-5">Specialist advice</h4>
							<p>
								Sometimes it’s helpful to see a specialist when you want. For
								gynaecology, child specialists, dermatology, cardiology,
								gastroenterology, nutrition,chronic diseases such as
								hypertension, or other conditions, DocService can help you to
								connect with the right specialist doctor and to stay healthy.
								More than 20 different specialities are available on DocService.
							</p>
						</div>
						<div>
							<h4 className="text-4xl font-semibold mb-5">
								Mental health and wellbeing
							</h4>
							<p>
								In a fast paced world, it is important to monitor and protect
								your mental health and wellbeing. Doctors can help you stay
								healthy whether you have symptoms at home or in your workplace
								of stress, smoking, anxiety, bereavement or depression.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Usages;