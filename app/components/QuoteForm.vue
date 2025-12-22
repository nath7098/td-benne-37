<template>
  <section id="quote-form" class="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold mb-4 text-gray-800">Demande de devis</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Remplissez ce formulaire et notre équipe vous contactera rapidement avec une proposition adaptée à vos
            besoins.
          </p>
        </div>

        <div v-motion class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
             :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="grid grid-cols-1 lg:grid-cols-5">
            <!-- Formulaire -->
            <div class="col-span-3 p-8 lg:p-10">
              <UForm :state="form" class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="submitForm">
                <!-- Progression du formulaire -->
                <UProgress v-model="formProgress" :max="6" class="col-span-1 md:col-span-2"/>

                <!-- Informations personnelles -->

                <UFormField label="Nom *" name="lastName">
                  <UInput
                      v-model="form.lastName" placeholder="Votre nom"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"/>
                </UFormField>

                <UFormField label="Prénom *" name="firstName">
                  <UInput
                      v-model="form.firstName" placeholder="Votre prénom"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"/>
                </UFormField>

                <UFormField label="Téléphone *" name="phone">
                  <UInput
                      v-model="form.phone" placeholder="Votre numéro de téléphone"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"/>
                </UFormField>

                <UFormField label="Email *" name="email">
                  <UInput
                      v-model="form.email" type="email" placeholder="Votre adresse email"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"/>
                </UFormField>

                <!-- Type de client -->
                <UFormField label="Vous êtes" name="clientType" class="col-span-1 md:col-span-2">
                  <div class="grid grid-cols-2 gap-4">
                    <button
                        type="button" class="flex items-center justify-center p-4 rounded-xl border transition-all"
                        :class="form.clientType === 'particulier' ? 'border-yellow-500 bg-yellow-50 text-yellow-700' : 'border-gray-200 hover:bg-gray-50'"
                        @click="form.clientType = 'particulier'">
                      <UIcon name="i-heroicons-user" class="mr-2"/>
                      Particulier
                    </button>
                    <button
                        type="button" class="flex items-center justify-center p-4 rounded-xl border transition-all"
                        :class="form.clientType === 'professionnel' ? 'border-yellow-500 bg-yellow-50 text-yellow-700' : 'border-gray-200 hover:bg-gray-50'"
                        @click="form.clientType = 'professionnel'">
                      <UIcon name="i-heroicons-building-office" class="mr-2"/>
                      Professionnel
                    </button>
                  </div>
                </UFormField>

                <!-- Type de benne -->
                <UFormField label="Type de benne *" name="binType" class="col-span-1 md:col-span-2">
                  <USelect
                      v-model="form.binType" :items="binTypes" placeholder="Sélectionnez le type de benne"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                      icon="i-heroicons-truck"/>
                </UFormField>

                <!-- Adresse de livraison -->
                <UFormField label="Adresse de livraison *" name="address" class="col-span-1 md:col-span-2">
                  <UTextarea
                      v-model="form.address" placeholder="Adresse complète où livrer la benne"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                      :rows="3"/>
                </UFormField>

                <!-- Date souhaitée -->
                <UFormField label="Date souhaitée (approximative) *" name="date" class="col-span-1 md:col-span-2">
                  <UInput
                      v-model="form.date" type="date"
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"/>
                </UFormField>

                <!-- Message -->
                <UFormField label="Message complémentaire" name="message" class="col-span-1 md:col-span-2">
                  <UTextarea
                      v-model="form.message" placeholder="Précisions sur votre besoin..."
                      class="w-full border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                      :rows="4"/>
                </UFormField>

                <!-- Bouton de soumission -->
                <div class="flex justify-end mt-8">
                  <UButton
                      type="submit" size="lg" color="yellow" :loading="isSubmitting" :disabled="!isFormValid"
                      class="rounded-xl font-bold px-8 py-4 shadow-md hover:shadow-lg transition-all">
                    <template #leading>
                      <UIcon name="i-heroicons-paper-airplane"/>
                    </template>
                    Envoyer ma demande
                  </UButton>
                </div>
              </UForm>
            </div>

            <!-- Sidebar -->
            <div class="col-span-2 bg-gray-800 text-white p-8 lg:p-10">
              <div class="space-y-8">
                <div>
                  <h3 class="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Pourquoi nous choisir ?</h3>
                </div>

                <div>
                  <div class="flex items-start mb-6">
                    <div class="bg-yellow-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-clock" class="text-gray-800 text-xl"/>
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-yellow-400">Délai rapide</h4>
                      <p class="text-gray-300">
                        Réponse garantie sous 24h et livraison possible dès le lendemain de votre commande.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start mb-6">
                    <div class="bg-yellow-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-currency-euro" class="text-gray-800 text-xl"/>
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-yellow-400">Prix transparent</h4>
                      <p class="text-gray-300">
                        Tarification claire sans frais cachés, avec des prix compétitifs adaptés à tous les budgets.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start mb-6">
                    <div class="bg-yellow-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-check-badge" class="text-gray-800 text-xl"/>
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-yellow-400">Service de qualité</h4>
                      <p class="text-gray-300">
                        Une équipe professionnelle et réactive pour vous accompagner tout au long de votre projet.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-4 mt-8 border-t border-gray-700">
                  <h4 class="text-xl font-bold mb-4 flex items-center">
                    <UIcon name="i-heroicons-phone" class="mr-2 text-yellow-400"/>
                    Contact direct
                  </h4>
                  <p class="text-gray-300 mb-3">
                    Besoin d'une réponse immédiate ? Appelez-nous :
                  </p>
                  <a
                      :href="`tel:${contact.phone}`"
                      class="inline-flex items-center justify-center w-full py-3 px-4 bg-yellow-500 text-gray-800 rounded-xl font-bold hover:bg-yellow-400 transition-colors mt-2">
                    <UIcon name="i-heroicons-phone" class="mr-2"/>
                    {{ contact.phone }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useContact } from '~/composables/useContact';
import emailjs from 'emailjs-com';

const contact = useContact();
const toast = useToast();

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  clientType: 'particulier',
  binType: null,
  address: '',
  date: '',
  message: '',
});

const binTypes = [
  {label: 'Benne à gravats (déchets de construction)', value: 'gravats'},
  {label: 'Benne espaces verts (végétaux, branches)', value: 'espaces_verts'},
  {label: 'Benne vide-maison (meubles, encombrants)', value: 'vide_maison'},
  {label: 'Benne à ferraille (métaux)', value: 'ferraille'},
  {label: 'Mini-benne (petits volumes)', value: 'mini_benne'},
  {label: 'Benne spéciale (déchets spécifiques)', value: 'speciale'}
];

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Calcul de la progression du formulaire
const formProgress = computed(() => {
  let filled = 0;

  if (form.value.firstName) {
    filled++;
  }
  if (form.value.lastName) {
    filled++;
  }
  if (form.value.phone) {
    filled++;
  }
  if (form.value.email) {
    filled++;
  }
  if (form.value.binType) {
    filled++;
  }
  if (form.value.address) {
    filled++;
  }

  return filled;
});

// Validation du formulaire
const isFormValid = computed(() => {
  return form.value.firstName &&
      form.value.lastName &&
      form.value.phone &&
      form.value.email &&
      form.value.binType &&
      form.value.address;
});

const submitForm = async () => {
  if (!isFormValid.value) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }

  isSubmitting.value = true;

  try {
    const responseStatus = await emailjs.send('service_9sip9sp', 'template_td_benne_37', form.value, 'user_W3AFP2shDIAiHW0MFhaPv');
    console.log(responseStatus);
    toast.add({
      color: 'success',
      duration: 5000,
      icon: 'i-heroicons-check-circle',
      title: 'Demande envoyée avec succès !',
      description: `Merci pour votre demande. Nous allons l'étudier et vous recontacterons dans les plus brefs délais.`
    });

    form.value = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      clientType: 'particulier',
      binType: null,
      address: '',
      date: '',
      message: ''
    };

  } catch (error) {
    console.log(error)
    toast.add({
      color: 'danger',
      duration: 5000,
      title: `Erreur lors de la demande de devis`,
      description: `Vous pouvez nous contacter directement par mail ou par téléphone !`,
      icon: 'i-heroicons-exclamation-triangle'
    });
  } finally {
    isSubmitting.value = false;
    formSubmitted.value = true;
  }
};
</script>

<style scoped>
/* Animation douce pour les interactions */
.transition-all {
  transition: all 0.3s ease;
}
</style>