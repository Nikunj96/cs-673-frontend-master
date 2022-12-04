import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'

const Contact = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <NextHead
          title="Contact Form"
          metaName="Contact Form Form"
          metaContent="All the required fields are marked with *"
        />

        <Header
          title="Contact Form"
          description="Emergency Contact"
        />

        <main className="w-full justify-center flex">
          <form className="w-full md:w-3/5 px-2 mt-6 flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="First Name" />
              </div>
              <TextInput
                id=" First Name"
                type="name"
				placeholder="Enter your First Name"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Middle Initial" />
              </div>
              <TextInput
                id=" Middle Intital"
                type="name"
				placeholder="Enter your Middle Initial"}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Last Name" />
              </div>
              <TextInput
                id=" Last Name"
                type="name"
				placeholder="Enter your Last Name"
              />
            </div>	
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="Phone" value="Phone Number" />
              </div>
              <TextInput
                id=" Phone"
                type="phone"
				placeholder="Enter your Phone Number"
                required={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email ID" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email address"
                required={true}
                addon="@"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="Sex" Gender" />
              </div>
              <TextInput
                id=" sex"
                type="sex"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="dateOfBirth" Date of Birth" />
              </div>
              <TextInput
                id=" sex"
                type="sex"
				placeholder="Enter your Date of Birth"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="street" Street" />
              </div>
              <TextInput
                id=" street"
                type="street"
				placeholder="Enter your Street"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="city" City" />
              </div>
              <TextInput
                id=" city"
                type="city"
				placeholder="Enter your City"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="state" State" />
              </div>
              <TextInput
                id=" state"
                type="state"
				placeholder="Enter your State"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="zip" Zipcode" />
              </div>
              <TextInput
                id=" zip"
                type="zip"
				placeholder="Enter your Zipcode"
                required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="relationToPatient" Relation To the Patient" />
              </div>
              <TextInput
                id=" relationToPatient"
                type="relationToPatient"
				placeholder="Enter your relation to the Patient"
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="type" Type" />
              </div>
              <TextInput
                id=" type"
                type="type"
				placeholder="Enter the type of relation to the patient: Family, Friends or Office"
				required={true}
              />
            </div>
			
			<div>
              <div className="mb-2 block">
                <Label htmlFor="emergencyPriority" Emergency Priority" />
              </div>
              <TextInput
                id=" emergencyPriority"
                type="emergencyPriority"
				placeholder="Set your Emergency Priority"
              />
            </div>
	
			<div>
              <div className="mb-2 block">
                <Label htmlFor="signature" Signature" />
              </div>
              <TextInput
                id=" signature"
                type="signature"
				placeholder="Enter your Full Name"
                required={true}
              />
            </div>
			
            <Button type="submit">Submit</Button>
          </form>
        </main>
      </div>
    </Layout>
  )
}